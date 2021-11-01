const webpack = require('webpack');
const paths = require('./configs/paths');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: paths.build,
        compress: true,
        hot: true,
        open: true,
        port: 9000
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
}
