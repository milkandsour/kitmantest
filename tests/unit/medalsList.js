var chai = require('chai')
var spies = require('chai-spies');
chai.use(spies);
var expect = chai.expect;
var medalsList = require("../../src/medalsList.js");
var m = require("../../src/lib/mithril.min.js");

describe('Medals List', function() {
  describe('model', function() {
		var model = null;
		beforeEach(function() {
			medalsList.model.prototype.load = function(){};
			model = new medalsList.model();
		});
		it('default', function() {
			expect(model.endpoint).to.equal(
				'https://gist.githubusercontent.com/michaelfbradley/ced357ae693110f2d9343b85ac99d61d/raw/009a47f72b2d45ffe9e3a7a6cea4e2b0e1e1299a/athletic_medalists.json'
			);
			expect(model.athletes).to.be.empty;
			expect(model.countries).to.be.empty;
			expect(model.sortedCountries()).to.be.empty;
    });
    it('sort with invalid data throw', function() {
			model.sort([], true)
			expect(model.athletes).to.be.empty;
			expect(model.sort).to.throw(Error);
			expect(model.sort.bind(model, 'asdaasda')).to.throw(Error);
			expect(model.sort.bind(model, {})).to.throw(Error);
    });
		it('the sort happens', function() {
			model.sort([
				{country: "a", medal:"asd"},
				{country: "b", medal:"asd"},
				{country: "b", medal:"asd"},
				{country: "b", medal:"asd"}
			], true)
			expect(model.sortedCountries()[0].name).to.equal('b');
    });
  });
});
