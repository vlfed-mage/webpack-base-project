module.exports = {
    mode: 'production',
    target: 'web',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        // runtimeChunk: 'single'
    },
}
