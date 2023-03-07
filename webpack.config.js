const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'package.bundled.js',
    path: path.resolve(__dirname, './lib'),
    library: 'BabelWebpack',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
