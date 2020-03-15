# webpack配置vue

## 环境
nodejs

## 初始化项目结构和依赖
``` bash
npm init -y

npm install vue 

npm install --save-dev webpack webpack-cli webpack-merge

mkdir src dist webpack
```

## 创建html模板及配置

``` bash
touch index.html

npm install --save-dev html-webpack-plugin

```
## webpack配置
``` bash
cd webpack
touch base.js dev.js pro.js

```
### base.js
``` javascript
const path = require('path');
const root = path.resolve(__dirname, '..');
module.exports = {
    entry: path.join(root, 'src/main.js'),
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            // {
            //     test: /\.css$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader'
            //     ]
            // }
        ]
    }
}
```
## webpack-dev-server配置
``` javascript
const path = require('path');

const merge = require('webpack-merge');
const base = require('./base');
const root = path.resolve(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        contentBase: path.join(root, "dist"),
        historyApiFallback: true,
        inline: true,
        port: 3800
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
            inject: 'false'
        })
    ],
   
})
```
## vue-loader配置

``` bash
npm install --save-dev vue-loader vue-template-compiler
```

