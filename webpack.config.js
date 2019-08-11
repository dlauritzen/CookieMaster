const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'CookieMaster.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            loader: 'babel-loader'
        }]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "node_modules")
        ]
    }
};
