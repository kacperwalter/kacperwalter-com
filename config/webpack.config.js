const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
    mode: 'development',
    entry: {
        main: './src/app.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: 'file-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/templates/template.html',
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '..', 'public'),
        port: 8080,
    },
};

module.exports = webpackConfig;