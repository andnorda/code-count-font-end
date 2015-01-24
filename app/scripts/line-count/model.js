'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	parse: function(response) {
		response.value = response.lineCount;
		response.name = response.path.substring(response.path.lastIndexOf('/') + 1);
		return response;
	}
});