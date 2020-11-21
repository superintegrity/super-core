const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const { zip, omit } = require('lodash')
const glob = require('glob')
const cheerio = require('cheerio')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { HtmlPlugin } = require('./platform/webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const assert = require('assert')

const globAsync = promisify(glob)

module.exports = async () => {
  const htmlInfos = await getHtmlInfos()

  await overwriteInjectStylesFiles()

  htmlInfos.forEach(({ mainScriptPath, entryScript, allStyles }) => {
    fs.writeFileSync(
      mainScriptPath,
      `
        ${allStyles
          .map(
            (style) =>
              `import '${getRelativePath(mainScriptPath, './build' + style)}'`,
          )
          .join('\n')}
        
        import { start } from '${getRelativePath(
          mainScriptPath,
          './build' + entryScript,
        )}'

        start({
          target: document.body,
        })
    `,
    )
  })

  return {
    entry: htmlInfos.reduce((acc, { mainScriptPath, mainScriptName }) => {
      acc[mainScriptName] = mainScriptPath
      return acc
    }, {}),
    // mode: 'development',
    // devtool: false,
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      // pathinfo: true,
      publicPath: `/`,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules\/(?!camelcase)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // targets: '> 2%',
                    forceAllTransforms: true,
                    useBuiltIns: 'usage',
                    corejs: { version: 3, proposals: true },
                  },
                ],
              ],
              plugins: [['@babel/plugin-transform-runtime']],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        // chunkFilename: '[name].[contenthash].css',
      }),
      ...htmlInfos.map(({ filePath, htmlFile$, mainScriptName }) => {
        htmlFile$('head').html(`
          <meta charset="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        `)

        return new HtmlPlugin({
          filename: filePath.replace('./build/', ''),
          templateContent: htmlFile$.html(),
          entry: mainScriptName,
          mainStyleInfos: htmlInfos.map((info) => ({
            mainScriptName: info.mainScriptName,
            mainStyle: info.mainStyle,
          })),
        })
      }),
      ...(process.env.ANALYZE === 'true'
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
            }),
          ]
        : []),
    ],
  }
}

function getRelativePath(from, to) {
  assert(path.extname(from) !== '', 'from must be a file')
  assert(path.extname(to) !== '', 'to must be a file')

  const relativePath = path.relative(path.dirname(from), to)
  if (relativePath.startsWith('.')) {
    return relativePath
  }

  return `./${relativePath}`
}

async function overwriteInjectStylesFiles() {
  const injectStylesFilePaths = await globAsync('./build/**/inject_styles*.js')

  injectStylesFilePaths.forEach((filePath) => {
    fs.copyFileSync(require.resolve('./platform/inject-styles.js'), filePath)
  })
}

async function getHtmlInfos() {
  const htmlFilePaths = await globAsync('./build/**/*.html')
  const htmlFileContents = htmlFilePaths.map((filePath) =>
    fs.readFileSync(filePath, 'utf-8'),
  )
  const htmlFile$ = htmlFileContents.map((content) => cheerio.load(content))

  // E.g., <link rel="modulepreload" href="/_app/about-569a562c.js" />
  /** @type {string[]} */
  const mainScripts = htmlFile$.map(
    ($) => $('link[rel="modulepreload"]').get(2).attribs['href'],
  )

  // E.g., <link rel="modulepreload" href="/_app/entry-80816452.js" />
  /** @type {string[]} */
  const entryScripts = htmlFile$.map(
    ($) => $('link[rel="modulepreload"]').get(0).attribs['href'],
  )

  // E.g.,
  //    <link rel="stylesheet" href="/_app/DefaultLayout-9f7f541d.css" />
  //    <link rel="stylesheet" href="/_app/about-7fff0589.css" />
  const allStylesList = htmlFile$.map(($) =>
    $('link[rel="stylesheet"]')
      .toArray()
      .map((e) => e.attribs['href']),
  )

  const mainStyles = allStylesList
    .map((s) => s.slice().reverse())
    .map((styles) =>
      styles.find((s) => {
        var first = s.replace('/_app/', '').charAt(0)
        return first === first.toLowerCase() && first !== first.toUpperCase()
      }),
    )

  // E.g., about-index, contact-index
  const mainScriptNames = htmlFilePaths.map((filePath) =>
    filePath.replace('./build/', '').replace('.html', '').replace(/\//g, '-'),
  )

  const mainScriptPath = htmlFilePaths.map((filePath) =>
    filePath.replace('.html', '.js'),
  )

  const htmlInfos = zip(
    htmlFilePaths,
    htmlFileContents,
    htmlFile$,
    mainScripts,
    allStylesList,
    mainStyles,
    mainScriptNames,
    entryScripts,
    mainScriptPath,
  ).map(
    ([
      filePath,
      fileContent,
      htmlFile$,
      mainScript,
      allStyles,
      mainStyle,
      mainScriptName,
      entryScript,
      mainScriptPath,
    ]) => ({
      filePath,
      fileContent,
      htmlFile$,
      mainScript,
      allStyles,
      mainStyle,
      mainScriptName,
      entryScript,
      mainScriptPath,
    }),
  )
  return htmlInfos
}
