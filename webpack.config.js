const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer:{
      port:7000
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
              test: /\.(png|jpe?g|gif|css|bin|zip)$/i,
              loader: 'file-loader',
              options: {
                  publicPath: './',
                  name: '[name].[ext]'
              },
              
          },
          // {
          //   test: /\.(gltf)$/,
          //   use: [
          //     {
          //       loader: "gltf-webpack-loader"
          //     }
          //   ]
          // }
          ,
          {
            test: /\.gltf$/,
            loader: '@vxna/gltf-loader',
            options: { inline: true },
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