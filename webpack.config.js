var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
                    MiniCssExtractPlugin.loader,                                            //将css打包到main.css文件中，否则将在页面的style标签里显示
                    // "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]-[hash:base64:10]",                 //开启css module（css模块）并且生成本地标识
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
                        loader: "less-loader",

                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /src/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                // modifyVars: {                                            //配置antd自定义主题
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
                test: /\.(jpg|png|gif)$/,                                                   //webpack5.0后不再需要使用file-loader和url-loader进行预处理
                type: "asset/inline",
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'webpack5',                                                               //生成html
            template: 'index.html'
        }),
        new MiniCssExtractPlugin(),                                                         //将css打包到main.css文件中，否则将在页面的style标签里显示
        new ESLintPlugin({                                                                  //eslint 检查文件机制
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