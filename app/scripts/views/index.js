var Backbone = require('backbone');
var template = require('../templates/index.hbs');

module.exports = Backbone.View.extend({
	className: 'index-view',

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	
	render: function() {
		this.$el.html(template(this.model.toJSON()));
		return this;
	}
});