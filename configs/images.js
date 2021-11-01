const { fileName } = require('../helpers/file');

module.exports.loader = {
    test: /\.(png|jpe?g|gif|svg)$/,
    exclude: /[\\/]node_modules[\\/]/,
    type: 'asset/resource',
    generator: {
        filename: `[path]${fileName}`,
    },
};
