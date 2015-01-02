var Backbone = require('backbone');
var MonthModel = require('./month');

module.exports = Backbone.Model.extend({
	initialize: function(attributes) {
		this.set('months', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function(month){
			return new MonthModel({
				year: attributes.year,
				month: month
			});
		}));
	}
});