'use strict';
var Backbone = require('backbone');
var CommitModel = require('../models/commit');

module.exports = Backbone.Collection.extend({
	model: CommitModel,
	
	initialize: function(options) {
		this.repo = options.repo;
	},

	url: function() {
		return 'rest/repo/commits?repo=' + this.repo;
	},

	comparator: 'timestamp'
});