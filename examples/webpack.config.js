var path = require("path");
console.log(path.join(__dirname, '..', 'src'))
module.exports = {
    entry: {
        app: [
            './src/index.js'
        ],
        mdc: [
            '../src/Mdc.elm'
        ]
    },

    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].js'
    },

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
                //include: [__dirname + '/../'],
                exclude: [/elm-stuff/, /node_modules/],
                loader: 'elm-hot!elm-webpack?verbose=true&warn=true&debug=true'//&pathToMake=./&cwd=' + __dirname + '/../src/'
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
        inline: true,
        stats: { colors: true }
    }
};
