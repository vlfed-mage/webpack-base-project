const HtmlPlugin = require('html-webpack-plugin');
const glob = require('glob');
const PATH = require('path');

const paths = require('./paths');

const minify = {
    removeComments: false,
    collapseWhitespace: false,
    conservativeCollapse: false
};

const useMinify = () => {
    return false;
}

const generateHtmlPlugins = () => {
    return glob.sync(PATH.resolve(paths.html, '*.pug')).map(item => {
        const extension = PATH.extname(item)
        const name = PATH.basename(item, extension)

        return new HtmlPlugin({
            filename: `${name}.html`,
            template: PATH.resolve(paths.html, item),
            inject: true,
            minify: useMinify() ? minify : {}
        });
    });
};

module.exports.generateHtmlPlugins = generateHtmlPlugins;
module.exports.loader = {
    test: /\.pug$/,
    use: [
        'html-loader',
        'pug-html-loader'
    ],
};
