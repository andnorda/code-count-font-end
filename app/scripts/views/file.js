'use strict';
var Backbone = require('backbone');
var template = require('../templates/file.hbs');

module.exports = Backbone.View.extend({
	tag: 'li',
	className: 'file',

	events: {
		'click': 'onClick'
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},

	onClick: function() {
		this.model.destroy();
	},
	
	render: function() {
		this.$el.html(template(this.model.toJSON()));
		return this;
	}
});