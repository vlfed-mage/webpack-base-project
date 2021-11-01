const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const images = require('./configs/images');

const plugins = [images.imageMinPlugin];
plugins.push(new CleanWebpackPlugin());

module.exports = {
    mode: 'production',
    target: 'web',
    performance: {
        maxAssetSize: 500000
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        // runtimeChunk: 'single'
    },
    plugins,
}
