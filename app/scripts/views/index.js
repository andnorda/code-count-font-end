'use strict';
var Backbone = require('backbone');
var app = require('../app');
var template = require('../templates/index.hbs');

module.exports = Backbone.View.extend({
	className: 'index-view',

	events: {
		'submit form': 'onFormSubmit'
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},

	onFormSubmit: function(event) {
		event.preventDefault();
		var query = this.$(event.target).find('input').val();
		app.router.navigate('overview?repo=' + encodeURIComponent(query), {trigger: true});
	},
	
	render: function() {
		this.$el.html(template(this.model.toJSON()));
		return this;
	}
});