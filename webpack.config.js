var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.less?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
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
    plugins: [
        new MiniCssExtractPlugin(),
        new ESLintPlugin({
            fix: true,
            extensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
            exclude: '/node_modules/'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
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