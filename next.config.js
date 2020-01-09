const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
    webpack(config, options) {
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(pdf|gif|png|jpe?g)$/,
                use: 'file-loader?name=[path][name].[ext]',
            }
        );

        return config;
    },
    cssModules: true
}));

/*
{
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        }
 */
