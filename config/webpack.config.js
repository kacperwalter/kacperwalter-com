const path = require('path');

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

    },
    plugins: {

    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '..', 'public'),
        port: 8080m
    },
};

module.exports = webpackConfig;