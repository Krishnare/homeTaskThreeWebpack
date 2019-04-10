// const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // entry: './src/styles/main.scss',
    // output: {
    //     path: path.resolve(__dirname, "dist"),
    //     filename:"main.css",
    //     publicPath:"/dist/"
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new miniCssExtractPlugin({
            filename: "./src/styles/main.scss",
            chunkFilename: "./dist/main.css"
        })
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