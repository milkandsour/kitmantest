var hooks = function() {
	this.Before(function(scenario, callback) {
		browser.ignoreSynchronization = true;
		browser.driver.manage().timeouts().implicitlyWait(100 * 1000);
		browser.driver.manage().timeouts().pageLoadTimeout(100 * 1000);
		callback();
	});
	this.After(function(scenario, callback) {
		callback();
	});
};

module.exports = hooks;
