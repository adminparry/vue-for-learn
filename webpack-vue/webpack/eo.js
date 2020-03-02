const path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
    entry: path.join(root, 'src/main.js'),
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].js'
    }
}