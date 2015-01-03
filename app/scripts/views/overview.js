var Backbone = require('backbone');
var template = require('../templates/overview.hbs');

module.exports = Backbone.View.extend({
	render: function() {
		this.$el.html(template(this.model.toJSON()));
		return this;
	}
});