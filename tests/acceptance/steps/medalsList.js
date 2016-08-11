'use strict';
var timeout = 10000;
var expect = require('chai').expect;
var q = require('q');

var getText = function(el){
	var deferred = q.defer();
	el.getText().then(function(text){
		deferred.resolve(text)
	});
	return deferred.promise;
};

var whenPresent = function(selector){
	var deferred = q.defer();
	browser.driver.wait(function(){
		return element(by.css(selector)).isPresent().then(function(isPresent){
			return isPresent;
		});
	}, timeout).then(function(isPresent){
		isPresent ? deferred.resolve(element(by.css(selector))) : deferred.reject();
	});
	return deferred.promise;
};

module.exports = function(){
	this.Given('I am a Kitman Lab customer on the medalists page', function(callback){
		browser.driver.get('http://localhost:3000').then(function(){
			callback();
		});
	});
	this.Then('I will see the first row populated with the best team', function(callback){
		whenPresent(
			'body > table > tbody > tr:nth-child(1) > td:nth-child(3)'
		).then(function(e){
			e.getText().then(function(first){
				whenPresent(
					'body > table > tbody > tr:nth-child(2) > td:nth-child(3)'
				).then(function(e){
					e.getText().then(function(second){
						expect(+first).to.be.above(+second);
						callback();
					})
				})
				
			})
		})
	});
	this.Then('The medals total sum would be the count of silver + bronze + gold', function(callback){
		whenPresent(
			'body > table > tbody > tr:nth-child(1) > td:nth-child(3)'
		).then(function(e){
			e.getText().then(function(total){
				whenPresent(
					'body > table > tbody > tr:nth-child(1) > td:nth-child(4)'
				).then(function(e){
					e.getText().then(function(gold){
						whenPresent(
							'body > table > tbody > tr:nth-child(1) > td:nth-child(5)'
						).then(function(e){
							e.getText().then(function(silver){
								whenPresent(
									'body > table > tbody > tr:nth-child(1) > td:nth-child(6)'
								).then(function(e){
									e.getText().then(function(bronze){
										expect(+total).to.equal(+gold + +silver + +bronze);
										callback();
									})
								})
							})
						})
					})
				})
			})
		});
	});
}
