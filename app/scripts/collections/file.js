var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
	sortField: 'changeCount',

	comparator: function(model) {
		return -model.get(this.sortField);
	},

	setSizes: function() {
		var max = this.reduce(function(prev, current) {
			console.log(current);
			return current.get(this.sortField) > prev ?
				current.get(this.sortField) : prev;
		}.bind(this), 0);

		console.log(max);
		console.log(this.sortField);

		if (max > 0) {
			this.forEach(function(model) {
				model.set('size', model.get(this.sortField) * 100 / max + 'px');
			}.bind(this));
		}
	}
});