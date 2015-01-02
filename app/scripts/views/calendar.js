var Backbone = require('backbone');
var MonthView = require('./month');
var template = require('../templates/calendar.hbs');

module.exports = Backbone.View.extend({

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.collection, 'sync', this.onSync);
	},

	onSync: function() {
		this.collection.forEach(function(commit) {
			var date = new Date(commit.get('timestamp') * 1000);
			var year = this.$('.year' + date.getFullYear());
			var month = year.find('.month' + date.getMonth());
			var day = month.find('.day' + date.getDate());
			day.data('commits', day.data('commits') + 1);
			var color = day.data('commits') * 20 + '';
			day.css('background', 'rgb(0,' + color + ',0)');
		}.bind(this));
	},

	render: function() {
		this.$el.html(template(this.model.toJSON()));
		this.$('ul.months').append(this.model.get('months').map(function(month) {
			return new MonthView({
				model: month
			}).render().el;
		}));
		return this;
	}
});