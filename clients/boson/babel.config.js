module.exports = (api) => {
  api.cache(false)

  return {
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
  }
}
