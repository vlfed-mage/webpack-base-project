const HtmlPlugin = require('html-webpack-plugin');
const glob = require('glob');
const PATH = require('path');

const routes = require('./routes');

const minify = {
    removeComments: false,
    collapseWhitespace: false,
    conservativeCollapse: false
};

const useMinify = () => {
    return false;
}

const generateHtmlPlugins = () => {
    return glob.sync(PATH.resolve(routes.html, '*.pug')).map(item => {
        const extension = PATH.extname(item)
        const name = PATH.basename(item, extension)

        return new HtmlPlugin({
            filename: `${name}.html`,
            template: PATH.resolve(routes.html, item),
            inject: true,
            minify: useMinify() ? minify : {}
        });
    });
};

module.exports.generateHtmlPlugins = generateHtmlPlugins;
module.exports.loader = {
    test: /\.pug$/,
    exclude: /[\\/]node_modules[\\/]/,
    use: [
        'html-loader',
        'pug-html-loader'
    ],
};
