var Backbone = require('backbone');
var MonthView = require('./month');
var template = require('../templates/calendar.hbs');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
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