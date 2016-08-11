'use strict';
/*
 * Server base setup
 * 
 * Serve static assets from the build folder
 * all the routes will serve the index file
 * 
 */
var path = require('path');
var root = {root:  path.join(__dirname, '..')};
var express = require('express');
var app = express();
var buildFolder = 'build';

console.log("Serving static assets from [%s]", buildFolder);
app.use(express.static(buildFolder));
app.get('/shutdown', function() {
	console.log('I feel so lonely, unhappy...I will kill myself!!');
	server.close(function() {
		console.log('Goodbye cruel world!');
		process.exit()
	});
});
app.get('*', function(_, res){
	res.sendFile(path.join(buildFolder, 'index.html'), root);
});
app.listen(3000, function(){
	console.log('Listening at http://%s:%s', 'localhost', 3000);
});
