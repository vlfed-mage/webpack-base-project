const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports.cssExtractPlugin = new MiniCssExtractPlugin({
    filename: `css/[name].css`
});

module.exports.loader = {
    test: /\.scss$/,
    use: [
        'style-loader',
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                esModule: false,
            },
        },
        {
            loader: 'css-loader',
            options: { sourceMap: true }
        },
        {
            loader: 'postcss-loader',
            options: { sourceMap: true }
        },
        {
            loader: 'sass-loader',
            options: { sourceMap: true }
        }
    ]
};
