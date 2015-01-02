var Backbone = require('backbone');
var MonthModel = require('./month');

module.exports = Backbone.Model.extend({
	initialize: function(attributes) {
		this.set('months', [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'Oktober',
			'November',
			'December'
		].map(function(month){
			return new MonthModel({
				year: attributes.year,
				month: month
			});
		}));
	}
});