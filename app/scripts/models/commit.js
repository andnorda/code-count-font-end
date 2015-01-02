var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	cx: function() {
		return 100 * (this.get('timestamp') - this.min()) /
			(this.max() - this.min()) + '%';
	},

	max: function() {
		return this.collection.max(function(model) {
			return model.get('timestamp');
		}).get('timestamp');
	},

	min: function() {
		return this.collection.min(function(model) {
			return model.get('timestamp');
		}).get('timestamp');
	}
});