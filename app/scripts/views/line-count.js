'use strict';
var Backbone = require('backbone');
var d3 = require('d3');
var template = require('../templates/line-count.hbs');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.addCircles);
	},

	addCircles: function() {
		var diameter = 500;

		var bubble = d3.layout.pack()
				.sort(null)
				.size([diameter, diameter])
				.padding(1.5);

		var svg = d3.select('.visualization').append('svg')
				.attr('width', diameter)
				.attr('height', diameter);

		var node = svg.selectAll('.node')
				.data(bubble.nodes({
					children: this.collection.toJSON()
				}))
			.enter().append('g')
				.attr('class', 'node')
				.attr('transform', function(d) {
					return 'translate(' + d.x + ',' + d.y + ')';
				});

		node.append('circle')
			.attr('r', function(d) {
				return d.r;
			})
			.style('fill', function(d) {
				return 'red';
			});

		node.append('text')
			.attr('dy', '.3em')
			.style('text-anchor', 'middle')
			.text(function(model) {
				return model.path;
			});
	},
	
	render: function() {
		this.$el.html(template());
		return this;
	}
});