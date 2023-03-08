const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'package.bundled.js',
    path: path.resolve(__dirname, './lib'),
    library: 'MyNpmModule',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
          options: {
            // parseMap: true,
          },
        },
      },
    ],
  },
};
