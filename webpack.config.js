const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer:{
      port:8000
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
              test: /\.(png|jpe?g|gif|glb|gltf|css)$/i,
              loader: 'file-loader',
              options: {
                  publicPath: './',
                  name: '[name].[ext]'
              },
              
          },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        })
    ]
}