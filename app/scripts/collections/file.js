var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
	comparator: function(model) {
		return -model.get('length');
	},

	setSizes: function() {
		var max = this.reduce(function(prev, current) {
			return current.get('length') > prev ? current.get('length') : prev;
		}, 0);

		if (max > 0) {
			this.forEach(function(model) {
				model.set('size', model.get('length') * 100 / max + 'px');
			});
		}
	}
});