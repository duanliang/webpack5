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
                use: ['babel-loader']
            },
            {
                test: /\.less?$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]--[hash:base64:5]",
                            }
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env', {

                                        },
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                type: "asset/inline",
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
        mainFiles: ['index'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
    },
    devServer: {
        static: './dist',
    },
}