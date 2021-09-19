let config = {
    publicPath: process.env.PUBLIC_PATH || '/',
    productionSourceMap: false,
    configureWebpack: {
        name: 'Demo hihi',
        resolve: {
            alias: require('./aliases.config').webpack,
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                            return `pkg.${packageName.replace('@', '')}`
                        },
                    },
                },
            },
            runtimeChunk: 'single',
        },

        output: {
            hashSalt: 'R!6{JA&!n?*hkxy',
            pathinfo: false,
        },
        devtool: process.env.VUE_APP_SOURCE_MAP || undefined,
        entry: {
        },
        plugins: [
        ],
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
}

config = Object.assign(
    {
        css: {
            sourceMap: true,
            extract: {
                filename: '[name].[hash].[contenthash].css',
                chunkFilename: '[id].[hash].[contenthash].css',
            },
        },
        chainWebpack: (config) => {
            config.plugin('html').tap((args) => {
                args.chunks = ['app']
                return args
            })
        },
        devServer: {
            disableHostCheck: true,
            watchOptions: {
                ignored: /node_modules/,
                poll: process.env.VUE_APP_POLLING_INTERVAL || 5007,
            },
        },
        runtimeCompiler: true,
    },
    config
)

module.exports = config
