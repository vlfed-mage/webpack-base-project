const HtmlPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require('path');

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
    return glob.sync(path.resolve(paths.html, '*.pug')).map(item => {
        const extension = path.extname(item)
        const name = path.basename(item, extension)

        return new HtmlPlugin({
            filename: `${name}.html`,
            template: path.resolve(paths.html, item),
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

