const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    entry: "./lib/main.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    mode: "development"
};