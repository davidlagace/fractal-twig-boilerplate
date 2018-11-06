const {resolve} = require("path");

const SassGlobImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        'styleguide': resolve(__dirname, "src/js/index.js"),
    },
    output: {
        path: resolve(__dirname, "public/js/"),
        filename: "[name].js",
    },

    devtool: devMode ? 'source-map' : false,
    resolve: {
        extensions: ['.js', '.scss']
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '../css/[name].css' : '../css/[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],

    module: {
        rules: [
            // Javascript configuration
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            // Sass configuration
            {
                test: /\.(png|woff|jpg|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: (loader) => [
                                // eslint-disable-line no-unused-vars
                                require("autoprefixer")({
                                    'browsers': ['> 1%', 'last 10 versions']
                                }),
                                require("postcss-flexbugs-fixes")
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: ["styles/"],
                            importer: SassGlobImporter()
                        }
                    }
                ],
            }
        ]
    }
};