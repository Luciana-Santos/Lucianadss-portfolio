const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/app/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/app/js'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
