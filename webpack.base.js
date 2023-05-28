const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const scss = () => ({
    test: /\.(sass|scss|css)$/,
    exclude: /node_modules/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                url: false,
            }
        },
        'sass-loader']
});

const javaScript = () => ({
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
        },
    },
});

module.exports.commonConfig = () => ({
    entry: {
        public: ['./assets/js/game.js', './assets/css/index.scss']
    },
    module: {
        rules: [
            javaScript(), scss()
        ]
    }, output: {
        filename: `./bmatch-[name]-${process.env.npm_package_version}.js`, path: path.resolve(__dirname, './public/dist'),
    }, resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss']
    }, plugins: [
        new MiniCssExtractPlugin({
            filename: `./bmatch-[name]-${process.env.npm_package_version}.css`,
        }),
    ]
});