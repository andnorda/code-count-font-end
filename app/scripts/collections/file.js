'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
	initialize: function(options) {
		this.repo = options.repo;
	},

	url: function() {
		return 'rest/files/linecount?repo=' + this.repo;
	}
});