const merge = require('webpack-merge');

const paths = require('./configs/paths');
const scss = require('./configs/scss');
const pug = require('./configs/pug');
const { isDev } = require('./helpers/env');

module.exports = options => {
    process.env.NODE_ENV = options?.NODE_ENV;

    const config = {
        entry: paths.entry,
        output: {
            path: paths.build,
        },
        module: {
            rules: [
                scss,
                pug,
            ]
        }
    };

    return merge(
        config,
        isDev() ?
            require('./dev.config') :
            require('./build.config')
    );
}
