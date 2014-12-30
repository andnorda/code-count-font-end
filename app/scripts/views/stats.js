var Backbone = require('backbone');
var app = require('../app');
var template = require('../templates/stats.hbs');

module.exports = Backbone.View.extend({
	className: 'stats-view',

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	
	render: function() {
		this.$el.html(template(this.model.toJSON()));
		return this;
	}
});