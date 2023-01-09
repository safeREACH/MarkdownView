const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const parentFolder = (function(dirName) {
    let path = dirName;
    let pos = path.lastIndexOf("/");
    if(pos < 0) {
        return path;
    }
    if(pos == path.length - 1) {
        path = path.substr(0, pos);
        pos = path.lastIndexOf("/");
    }
    if(pos < 0) {
        return path;
    }
    path = path.substr(path, pos);
    return path;
})(__dirname);

module.exports = {
    entry: __dirname + "/src/js/index.js",
    output: {
        path: parentFolder + '/MarkdownView/dist',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            }, {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.LoaderOptionsPlugin({minimize: true}),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
}
