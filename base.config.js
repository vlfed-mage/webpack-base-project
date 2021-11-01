const { merge } = require('webpack-merge');

const paths = require('./configs/paths');
const scss = require('./configs/scss');
const pug = require('./configs/pug');
const images = require('./configs/images');
const fonts = require('./configs/fonts');
const js = require('./configs/js');
const { isDev } = require('./helpers/env');

module.exports = () => {
    const plugins = pug.generateHtmlPlugins();
    plugins.push(scss.cssExtractPlugin);

    const config = {
        performance: {
            hints: false,
        },
        entry: paths.entry,
        output: {
            path: paths.build,
            publicPath: isDev() ? '/' : ``,
        },
        module: {
            rules: [
                js.loader,
                scss.loader,
                pug.loader,
                images.loader,
                fonts.loader,
            ]
        },
        plugins,
    };

    return merge(
        config,
        isDev() ?
            require('./dev.config') :
            require('./build.config')
    );
}
