'use strict';
module.exports = function(grunt){
	grunt.registerTask('acceptance', 'Run the acceptance tests', function(mode){
		var tasks = ['continue:on', 'protractor', 'continue:off'];
		if(mode && /dev|prod/.test(mode)){
			tasks.unshift('server:'+mode+':start');
			tasks.push('server:'+mode+':stop');
		}
		tasks.push('continue:fail-on-warning');
		grunt.task.run(tasks); 
	});
};

