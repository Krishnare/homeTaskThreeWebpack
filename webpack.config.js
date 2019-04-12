const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const syntexDynamicImport = require('syntax-dynamic-import');
module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      another: './src/print.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new miniCssExtractPlugin({
            filename: "./src/styles/main.scss",
            chunkFilename: "./dist/main.css"
        }),
        new LodashModuleReplacementPlugin
        // new syntexDynamicImport
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.html$/,
                    use:[
                        {
                            loader: "html-loader",
                            options: {minimize: true}
                        }
                    ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}