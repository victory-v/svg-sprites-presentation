const path = require('path');
const SpritePlugin = require('svg-sprite-loader/plugin');


module.exports = {
  context: __dirname,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader'
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {convertColors: {shorthex: false}},
                {removeUselessStrokeAndFill: true},
                {removeStyleElement: true},
                {removeAttrs: { attrs: ['fill', 'stroke'] } }
              ]
            }
          }
        ],
      }
    ]
  },

  plugins: [
    new SpritePlugin()
  ]
};