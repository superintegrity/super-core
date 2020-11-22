const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const { zip, omit } = require('lodash')
const glob = require('glob')
const cheerio = require('cheerio')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const CopyPlugin = require('copy-webpack-plugin')
const { HtmlPlugin } = require('./platform/webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const assert = require('assert')

const globAsync = promisify(glob)

module.exports = async () => {
  const htmlInfos = await getHtmlInfos()

  await overwriteInjectStylesFiles()

  createMainScripts(htmlInfos)

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
        // No need, will copy css files to dist/ as is
        // using copy-webpack-plugin
        // {
        //   test: /\.css$/i,
        //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'build/_app/**/*.css', flatten: true },
          { from: 'build/**/*.ico', flatten: true },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        // chunkFilename: '[name].[contenthash].css',
      }),
      ...htmlInfos.map(({ filePath, htmlFile$, mainScriptName }) => {
        htmlFile$('link[rel="modulepreload"]').remove()
        htmlFile$('script[type="module"]').remove()

        htmlFile$('link[rel="stylesheet"]').each(function () {
          var oldHref = htmlFile$(this).attr('href')
          htmlFile$(this).attr('href', oldHref.replace('/_app', ''))
        })

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

function createMainScripts(htmlInfos) {
  htmlInfos.forEach(({ mainScriptPath, entryScript, allStyles }) => {
    fs.writeFileSync(
      mainScriptPath,
      `
        /* No need, will copy css files to dist/ as is 
           using copy-webpack-plugin
          ${allStyles
            .map(
              (style) =>
                `import '${getRelativePath(
                  mainScriptPath,
                  './build' + style,
                )}'`,
            )
            .join('\n')}
        */
        
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
  const htmlFiles$ = htmlFileContents.map((content) => cheerio.load(content))

  // E.g., <link rel="modulepreload" href="/_app/about-569a562c.js" />
  /** @type {string[]} */
  const mainScripts = htmlFiles$.map(
    ($) => $('link[rel="modulepreload"]').get(2).attribs['href'],
  )

  // E.g., <link rel="modulepreload" href="/_app/entry-80816452.js" />
  /** @type {string[]} */
  const entryScripts = htmlFiles$.map(
    ($) => $('link[rel="modulepreload"]').get(0).attribs['href'],
  )

  // E.g.,
  //    <link rel="stylesheet" href="/_app/DefaultLayout-9f7f541d.css" />
  //    <link rel="stylesheet" href="/_app/about-7fff0589.css" />
  const allStylesList = htmlFiles$.map(($) =>
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
    htmlFiles$,
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
