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
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]-[hash:base64:10]",
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
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /src/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                                // modifyVars: {
                                //     'primary-color': '#1DA57A',
                                //     'link-color': '#1DA57A',
                                //     'border-radius-base': '2px',
                                // },
                                javascriptEnabled: true,
                            },
                        }
                    },
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                type: "asset/inline",
            },
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