'use strict';
var Backbone = require('backbone');
var InterdependenciesModel = require('../models/interdependencies');

module.exports = Backbone.Collection.extend({
    model: InterdependenciesModel,

	initialize: function(options) {
		this.repo = options.repo;
	},

	url: function() {
		return 'rest/interdependencies?repo=' + this.repo;
	}
});