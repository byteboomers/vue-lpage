const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname + '/src/VueLPage.vue'),
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'vue-lpage.js',
        library: 'vue-lpage',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};