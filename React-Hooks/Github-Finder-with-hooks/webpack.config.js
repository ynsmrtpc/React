const path = require('path');

module.exports = {
    entry: './src/examples/note_app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    }
}