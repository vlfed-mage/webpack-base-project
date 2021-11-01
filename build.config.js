const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const images = require('./configs/images');

const plugins = [images.imageMinPlugin];

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
