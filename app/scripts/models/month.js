var Backbone = require('backbone');
var _ = require('lodash');

module.exports = Backbone.Model.extend({
	initialize: function(attributes) {
		var year = attributes.year;
		var month = [
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
		].indexOf(attributes.month);
		
		var weeks = [];
		
		var date = new Date(year, month, 1);
		var weekNumber = this.getWeekNumber(date);	
		var prev = weekNumber;
		var index = 0;
		while (date.getMonth() === month) {
			weekNumber = this.getWeekNumber(date);
			if (weekNumber !== prev) {
				index++;
				prev = weekNumber;
			}
			if (!weeks[index]) {
				weeks[index] = {
					week: weekNumber,
					days: new Array(7)
				};
			}
			weeks[index].days[(date.getDay()+6)%7] = new Date(date);

			date.setDate(date.getDate() + 1);
		}
		console.log(this);

		this.set('weeks', weeks);
	},

	getWeekNumber: function(date) {
	    var d = new Date(+date);
	    d.setHours(0,0,0);
	    d.setDate(d.getDate()+4-(d.getDay()||7));
	    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
	}
});