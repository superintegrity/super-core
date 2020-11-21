const cheerio = require('cheerio')

class HtmlPlugin {
  /**
   *
   * @param {object} options
   * @param {string} options.filename
   * @param {string} options.templateContent
   * @param {string} options.entry
   * @param {{ mainScriptName: string, mainStyle: string | undefined  }[]} options.mainStyleInfos
   */
  constructor(options) {
    this._options = options
    this._template$ = cheerio.load(options.templateContent)
  }

  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    compiler.hooks.emit.tapPromise('HtmlPlugin', async (compilation) => {
      const cssFileMap = Object.keys(compilation.assets)
        .filter((asset) => asset.endsWith('.css'))
        .reduce((map, asset) => {
          const styleInfo = this._options.mainStyleInfos.find(
            (info) => info.mainScriptName === asset.split('.')[0],
          )

          if (styleInfo && styleInfo.mainStyle) {
            map[styleInfo.mainStyle.replace('/_app/', '')] = asset
          }

          return map
        }, /** @type {Record<string, string>} */ ({}))

      const emittedStyles = Object.keys(compilation.assets).filter(
        (asset) =>
          asset.endsWith('.css') && asset.split('.')[0] === this._options.entry,
      )
      const emittedScripts = Object.keys(compilation.assets).filter(
        (asset) =>
          asset.endsWith('.js') && asset.split('.')[0] === this._options.entry,
      )

      emittedStyles.forEach((style) => {
        this._template$('head').append(
          `<link href="/${style}" rel="stylesheet" />`,
        )
      })

      emittedScripts.forEach((script) => {
        this._template$('body').append(`<script src="/${script}"></script>`)
      })

      this._template$('head').append(`
        <script>
          window.SuperIntegrity = window.SuperIntegrity || {}
          window.SuperIntegrity.cssFileMap = ${JSON.stringify(cssFileMap)}
         </script>
      `)

      compilation.assets[this._options.filename] = {
        source: () => {
          return this._template$.html()
        },
        size: () => {
          return this._template$.html().length
        },
      }
    })
  }
}

module.exports = { HtmlPlugin }
