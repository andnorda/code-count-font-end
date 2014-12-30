var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	idAttribute: 'query',

	url: function() {
		return '/rest/stats?repo=' + this.id;
	},

	parse: function(response, options) {
		response.files = response.files.sort(function(a, b) {
			return a.length < b.length;
		});
		return response;
	}
});