'use strict';
var Backbone = require('backbone');
var FileModel = require('./file');
var FileCollection = require('../collections/file');

module.exports = Backbone.Model.extend({
	defaults: {
		'files': new FileCollection()
	},

	idAttribute: 'query',

	url: function() {
		return '/rest/stats?repo=' + this.id;
	},

	parse: function(response) {
		var files = response.files;

		response.files = this.get('files');
		files.forEach(function(file) {
			response.files.add(new FileModel(file));
		});

		return response;
	}
});