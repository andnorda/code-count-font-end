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

	parse: function(response, options) {
		var files = response.files;

		response.files = this.get('files');
		files.forEach(function(file) {
			response.files.add(new FileModel({
				name: file.name,
				length: file.length
			}));
		});

		return response;
	}
});