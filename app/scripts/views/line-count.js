'use strict';
var Backbone = require('backbone');
var template = require('../templates/line-count.hbs');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},
	
	render: function() {
		this.$el.html(template());
		return this;
	}
});