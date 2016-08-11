'use strict';
var grunt= require('grunt');
module.exports= {
	pm2Flush: {
		cmd: 'node ./node_modules/pm2/bin/pm2 flush'
	},
	pm2devStart: {
		cmd: 'node ./node_modules/pm2/bin/pm2 start server/dev.json'
	},
	pm2devStop: {
		cmd: 'node ./node_modules/pm2/bin/pm2 stop server/dev.json'
	},
	pm2devDelete: {
		cmd: 'node ./node_modules/pm2/bin/pm2 delete server/dev.json'
	},
	pm2prodStart: {
		cmd: 'node ./node_modules/pm2/bin/pm2 start server/prod.json'
	},
	pm2prodStop: {
		cmd: 'node ./node_modules/pm2/bin/pm2 stop server/prod.json'
	},
	pm2prodDelete: {
		cmd: 'node ./node_modules/pm2/bin/pm2 delete server/prod.json'
	}
};
