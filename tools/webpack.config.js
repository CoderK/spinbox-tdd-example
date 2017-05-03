const path = require('path');
const packageJson = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        inline: true
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /(node_modules)/,
                query: packageJson.babel
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Spinbox TDD",
            template: "assets/index.html",
            inject: "body"
        })
    ]
};
