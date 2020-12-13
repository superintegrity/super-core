module.exports = {
  extends: '@sveltejs/snowpack-config',
  plugins: [
    // '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-babel',
      {
        transformOptions: {
          presets: ['@babel/preset-typescript'],
        },
      },
    ],
  ],
  mount: {
    'src/modules': '/_app/modules',
    'src/pages': '/_app/pages',
  },
}
