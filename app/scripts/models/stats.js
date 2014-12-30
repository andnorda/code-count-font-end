var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	idAttribute: 'query',

	url: function() {
		return '/rest/stats?repo=' + this.id;
	}
});