'use strict';
module.exports = function (grunt) {
	grunt.registerTask('server', 'Start/Stop the server', function(mode, action){
		if(!mode || !/dev|prod/.test(mode)){
			mode = "dev";
		}
		if(!action || action === 'start'){	
			grunt.task.run([
				'exec:pm2prodDelete',
				'exec:pm2devDelete',
				'exec:pm2'+mode+'Start'
			]); 
		}else{
			grunt.task.run([
				'exec:pm2'+mode+'Stop',
				'exec:pm2prodDelete',
				'exec:pm2devDelete'
			]);
		}
	});
};

