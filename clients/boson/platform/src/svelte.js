const glob = require('glob')
const fs = require('fs-extra')
const { promisify } = require('util')

const globAsync = promisify(glob)

async function copyImages() {
  const allImages = await getAllImages()
  console.log('Copy images', allImages)

  allImages.forEach((file) => {
    fs.copySync(file, file.replace(/^\.\/src\//, './static/_app/'))
  })
}

async function getAllImages() {
  return [
    ...(await globAsync('./src/**/*.png')),
    ...(await globAsync('./src/**/*.jpg')),
    ...(await globAsync('./src/**/*.jpeg')),
    ...(await globAsync('./src/**/*.svg')),
  ]
}

module.exports = { copyImages }
