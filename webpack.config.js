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
                use: [{
                    loader: "babel-loader",
                    options: {
                        plugins: [
                          ['import', { libraryName: "antd", style: true }]
                        ]
                    }
                }],
                exclude: /node_modules/,
                
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
        ]
    }
}