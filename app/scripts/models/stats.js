var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	idAttribute: 'query',

	url: function() {
		return '/rest/stats?repo=' + this.id;
	},

	sortFiles: function(property) {
		var files = this.get('files');

		if (files) {
			this.set('files', files.sort(function(a, b) {
				return a[property] < b[property];
			}));
		}
	},

	setFileSizes: function(property, multiplier) {
		var files = this.get('files');
		if (!files) {
			return;
		}

		var max = files.reduce(function(prev, current) {
			return current[property] > prev ? current[property] : prev; 
		}, 0);

		multiplier = multiplier || 100;
		this.set('files', files.map(function(file) {
			file.size = file[property] * multiplier / max + 'px';
			return file;
		}));
	}
});