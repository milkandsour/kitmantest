exports.config = {
	seleniumServerJar: '../../node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar',
	specs: [
		'features/*.feature'
	],
	capabilities: {
		'browserName': 'phantomjs',
		'phantomjs.binary.path': require('phantomjs').path
	},
	framework: 'custom',
	frameworkPath: '../../node_modules/protractor-cucumber-framework',
	cucumberOpts: {
		require: [
			'steps/*.js',
			'support/*.js'
		],
		format: 'pretty'
	}
};
