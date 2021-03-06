var path = require("path");
var TouchFilesPlugin = require('./webpack-touch-files-plugin');

// List all files [as directory tree] in Node.js recursively in a synchronous fashion

var walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            walkSync(dir + '/' + file, filelist);
        }
        else {
            filelist.push(path.resolve(path.join(dir, file)));
        }
    });
};

var mdcFiles = ['./src/index.js'];
walkSync("../src/", mdcFiles);

module.exports = {
    entry: {
        app: mdcFiles
    },

    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].js'
    },

    plugins: [
        new TouchFilesPlugin({ root: "./src/", touch: "./src", trigger: "/src/Mdc" })
    ],

    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:    /\.html$/,
                exclude: /node_modules/,
                loader:  'file?name=[name].[ext]'
            },
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                loader: 'elm-hot!elm-webpack?verbose=true&warn=true&debug=true'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ],

        noParse: /\.elm$/
    },

    devServer: {
        stats: {
            chunkModules: false,
            assets: false,
            colors: true
        }
    }
};
