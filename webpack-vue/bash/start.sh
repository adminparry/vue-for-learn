#建立工程目录
mkdir dist src webpack
#初始化依赖
npm init -y
npm install vue
npm install --save-dev html-webpack-plugin vue-loader vue-template-compiler webpack webpack-cli webpack-dev-server webpack-merge
#创建babel配置和入口模板html
touch index.html .babelrc
#创建入口文件和组件文件夹
cd src 
touch main.js
mkdir components
cd ..
#webpack配置
cd webpack
touch eo.js loader.js dev.js

