var path = require('path')
module.exports = {
	entry: {boundle: './src'},
	output: {path: path.join(__dirname, 'build'), filename: "bundle.js"}
};
