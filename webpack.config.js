var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
        mainFiles: ['index'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
    },
    devServer: {
        static: './dist',
    },
}