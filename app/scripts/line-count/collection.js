'use strict';
var Backbone = require('backbone');
var FileModel = require('./model');

module.exports = Backbone.Collection.extend({
	model: FileModel,

	initialize: function(options) {
		this.repo = options.repo;
	},

	url: function() {
		return 'rest/files/linecount?repo=' + this.repo;
	}
});