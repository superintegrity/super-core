const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const { zip } = require('lodash')
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
        // {
        //   test: /\.m?js$/,
        //   exclude: /node_modules\/(?!camelcase)/,
        //   use: {
        //     loader: 'babel-loader',
        //   },
        // },
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
    fs.writeFileSync(
      filePath,
      `
        export default function () {
          return Promise.resolve([])
        }
      `,
    )
  })
}

async function getHtmlInfos() {
  const htmlFilePaths = await globAsync('./build/**/*.html')
  const htmlFileContents = htmlFilePaths.map((filePath) =>
    fs.readFileSync(filePath, 'utf-8'),
  )
  const htmlFile$ = htmlFileContents.map((content) => cheerio.load(content))
  /** @type {string[]} */
  const mainScripts = htmlFile$.map(
    ($) => $('link[rel="modulepreload"]').get(2).attribs['href'],
  )
  /** @type {string[]} */
  const entryScripts = htmlFile$.map(
    ($) => $('link[rel="modulepreload"]').get(0).attribs['href'],
  )
  const allStylesList = htmlFile$.map(($) =>
    $('link[rel="stylesheet"]')
      .toArray()
      .map((e) => e.attribs['href']),
  )
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
      mainScriptName,
      entryScript,
      mainScriptPath,
    ]) => ({
      filePath,
      fileContent,
      htmlFile$,
      mainScript,
      allStyles,
      mainScriptName,
      entryScript,
      mainScriptPath,
    }),
  )
  return htmlInfos
}
