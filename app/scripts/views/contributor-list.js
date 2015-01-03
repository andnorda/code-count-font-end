var Backbone = require('backbone');
var template = require('../templates/contributor-list.hbs');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},

	render: function() {
		this.$el.html(template(this.collection.toJSON()));
		return this;
	}
});