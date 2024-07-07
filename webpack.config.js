const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build'),
    },
    // --------- Babel -----------
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './build'), // 本來打包完的檔案位置
        },
        port: 8080, // 預覽網頁要跑在哪個port
    }
};