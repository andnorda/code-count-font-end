var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	parse: function(response) {
		response.value = response.lineCount;
		return response;
	}
});