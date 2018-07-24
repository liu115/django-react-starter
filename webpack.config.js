var path = require("path")
// var webpack = require('webpack')

module.exports = {
    entry: './frontend/src/index',
    output: {
        path: path.join(__dirname, './frontend/static/frontend'),
        filename: "main.js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        }]
    },
}
