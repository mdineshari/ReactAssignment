const path = require('path');

module.exports = {
    entry: './src/public/js/index.js',
    output: {
        path: path.resolve('dist/public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$%/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(js||jsx)$/,
                use: "babel-loader"
            }
        ]
    }
}