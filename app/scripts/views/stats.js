'use strict';
var Backbone = require('backbone');
var FileView = require('./file');
var template = require('../templates/stats.hbs');

module.exports = Backbone.View.extend({
	className: 'stats-view',

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model.get('files'), 'remove', this.render);
	},

	addAll: function(models) {
		models.setSizes();
		models.forEach(function(model) {
			this.$('ul.files').append(new FileView({
				model: model
			}).render().el);
		}.bind(this));
	},
	
	render: function() {
		this.$el.html(template(this.model.toJSON()));
		this.addAll(this.model.get('files'));
		return this;
	}
});