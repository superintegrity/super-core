const {
  existsSync,
  ensureDir,
  promises: { readFile, writeFile },
} = require('fs-extra')

const path = require('path')
const { pascalCase } = require('change-case')
const { template } = require('lodash')
const globby = require('globby')

/**
 *
 * @param {object} input
 * @param {string} input.destination
 */
async function createComponent({ destination }) {
  if (existsSync(destination)) {
    throw new Error(`${destination} already exists`)
  }

  const componentFileName = path.basename(destination)
  const componentName = {
    pascalCase: pascalCase(componentFileName),
  }

  const templateFilePaths = await globby([
    path.join(__dirname, './templates/*.template'),
  ])

  await Promise.all(
    templateFilePaths.map((templateFilePath) =>
      copyTemplateFile({ templateFilePath, componentName, destination }),
    ),
  )
}

/**
 *
 * @param {object} input
 * @param {string} input.templateFilePath
 * @param {object} input.componentName
 * @param {string} input.destination
 */
async function copyTemplateFile({
  templateFilePath,
  componentName,
  destination,
}) {
  const targetFileName = path.basename(
    template(templateFilePath, {
      interpolate: /\[([\s\S]+?)\]/g,
    })({ componentName }),
    '.template',
  )

  const templateContent = await readFile(templateFilePath, 'utf-8')
  const targetContent = template(templateContent)({
    componentName,
  })

  console.log('Creating', `${destination}/${targetFileName}`)
  await ensureDir(destination)
  await writeFile(`${destination}/${targetFileName}`, targetContent)
}

module.exports = { createComponent }
