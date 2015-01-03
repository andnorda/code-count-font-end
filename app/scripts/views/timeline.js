'use strict';
var Backbone = require('backbone');
var d3 = require('d3');
var template = require('../templates/timeline.hbs');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},

	d3: function() {
		var svg = d3.select('svg');
		var circle = svg.selectAll('circle')
			.data(this.collection.models);
		circle.enter().append('circle');
		circle.attr('r', 1);
		circle.attr('cy', '50%');
		circle.attr('cx', function(d) {
			return d.cx(); 
		});
	},
	
	render: function() {
		this.$el.html(template(this.collection.toJSON()));
		this.d3();
		return this;
	}
});