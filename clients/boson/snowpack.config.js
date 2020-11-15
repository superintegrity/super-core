// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: '@sveltejs/snowpack-config',
  plugins: ['@snowpack/plugin-babel'],
  mount: {
    'src/modules': '/_app/modules',
  },
}
