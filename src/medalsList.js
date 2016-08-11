'use strict';
var m = require("./lib/mithril.min.js");
/*
 * Meedals list component.
 */
var medalsList = {};
/*
 * Medals list model.
 * 
 * Stores athletes and countries, the last one by medals count.
 * this.athletes could be used for a detailed view (not implemented),
 * each countries stores the index of the athlete in this.athletes.
 * 
 */
medalsList.model = function(){
	this.endpoint = "https://gist.githubusercontent.com/michaelfbradley/ced357ae693110f2d9343b85ac99d61d/raw/009a47f72b2d45ffe9e3a7a6cea4e2b0e1e1299a/athletic_medalists.json";
	this.athletes = [];
	this.countries = [];
	this.sortedCountries = m.prop([]);
	this.load();
};
/*
 * Load the list of medals.
 * 
 * Load the medals and attempt to sort.
 * 
 */
medalsList.model.prototype.load = function(){
	var self = this;
	m.request({
		method: "GET", 
		url: this.endpoint, 
		background: true, 
		initialValue: []
	}).then(
		self.sort.bind(self),
		function(){
			//error handling
		}
	);
};
/*
 * Sort the list of medals.
 * 
 * Sort the medals list by country totals.
 * 
 */
medalsList.model.prototype.sort = function(athletes, stale){
	var self = this;
	athletes.forEach(function(athlete, index){
		if(!self.countries.hasOwnProperty(athlete.country)){
			self.countries[athlete.country] = {total: 0, athletes: []};
		}
		if(!self.countries[athlete.country].hasOwnProperty(athlete.medal)){
			self.countries[athlete.country][athlete.medal] = 1;
		}else{
			self.countries[athlete.country][athlete.medal] += 1;
		}
		self.countries[athlete.country]['total'] += 1;
		self.countries[athlete.country]['athletes'].push(index);
	})
	self.athletes = athletes;
	self.sortedCountries(
		Object.keys(self.countries).map(function(key){
			return {name: key, total: self.countries[key].total};
		}).sort(function(a, b){
			return b.total - a.total;
		})
	);
	if(!stale){
		m.redraw();	
	}
}

//medal list model end
/*
 * Model List Controller.
 * 
 * Bind the model to the view.
 * 
 */
medalsList.controller = function(){
	return {ml: new medalsList.model()};
};
//medal list controller end
/*
 * Medals List View.
 * 
 * VDOM view.
 * 
 */
medalsList.view = function(ctrl){
	var countries = ctrl.ml.sortedCountries();
	return !countries.length ? m("div", [ 
			m('h4', 'We are almost ready...'), 
			m('p', '...waiting too much? Try to refresh the page.')
	]): m("table.table.table-striped.table-hover", [
		m("thead", [
			m("tr", [
				m('th', '#'),
				m('th', 'Country'),
				m('th', 'Total'),
				m('th', 'Gold'),
				m('th', 'Silver'),
				m('th', 'Bronze')
			])
		]),
		m("tbody", countries.map(function(country, index){
			return m('tr', [
				m('th', index + 1),
				m('td', country.name),
				m('td', ctrl.ml.countries[country.name].total || '-'),
				m('td', ctrl.ml.countries[country.name].Gold || '-'),
				m('td', ctrl.ml.countries[country.name].Silver || '-'),
				m('td', ctrl.ml.countries[country.name].Bronze || '-')
			]);
		}))
	]);
};
//medal list view end
module.exports = medalsList;
