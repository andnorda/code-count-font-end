'use strict';
var Backbone = require('backbone');
var d3 = require('d3');
var template = require('./template.hbs');

module.exports = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.addCircles);
	},

	addCircles: function() {
		var diameter = 1000;
        var color = d3.scale.category10();

		var bubble = d3.layout.pack()
				.sort(null)
				.size([diameter, diameter])
				.padding(1.5);

		var svg = d3.select('.visualization').append('svg')
				.attr('width', diameter)
				.attr('height', diameter);

        var data = {
            children: this.collection.toJSON().filter(function(model) {
                return model.value > 0;
            })
        }
		var node = svg.selectAll('.node')
				.data(bubble.nodes(data)
                    .filter(function(d) { return !d.children; }))
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
				return color(d.path.substring(d.path.lastIndexOf('.') + 1));
			});

		node.append('text')
			.attr('dy', '.3em')
			.style('text-anchor', 'middle')
			.text(function(model) {
				return model.name;
			});
	},
	
	render: function() {
		this.$el.html(template());
		return this;
	}
});