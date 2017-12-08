const path = require('path')

const webpack = require('webpack')



module.exports = {
    entry: path.join(__dirname + '/src/scripts/scrollpage.js'),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "scrollpage-dist.js",
        publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: '$'
            }]
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]


        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]


        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }
        ],
        loaders: [

        ]
    },
    plugins: [
        // new ExtractTextPlugin('[name].css'),
        // new HtmlWebpackPlugin({  // Also generate a test.html 
        //     filename: 'testzzz.html'
        // }),//该插件将为您生成一个HTML5文件，这个文件用script标签引用所有的webpack包
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ]
}