'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	idAttribute: 'month',

	initialize: function(attributes) {
		var year = attributes.year;
		var month = attributes.month;

		this.set('name', [
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
		][month]);
		
		var weeks = [];
		
		var date = new Date(year, month, 1);
		var weekNumber = date.getWeek();	
		var prev = weekNumber;
		var index = 0;
		while (date.getMonth() === month) {
			weekNumber = date.getWeek();
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
			weeks[index].days[(date.getDay()+6)%7] = date.getDate();

			date.setDate(date.getDate() + 1);
		}

		this.set('weeks', weeks);
	}
});