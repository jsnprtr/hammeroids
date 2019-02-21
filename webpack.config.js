const path = require('path');

module.exports = {
  entry: './app/javascript/src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'app/public/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  mode: 'development'
};
