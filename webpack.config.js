const path = require ( "path" );
const HtmlWebpackPlugin = require ( "html-webpack-plugin" );

module.exports = {
    entry: "./index.js",
    output: {
        path: path.join ( __dirname, "/bundle" ),
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 8001
    },
    module: {
        rules: [
            { test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/i, use: [ "style-loader", "css-loader" ] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: false
        })
    ],
    resolve: {
        extensions: [ ".js", ".jsx" ]
    }
}