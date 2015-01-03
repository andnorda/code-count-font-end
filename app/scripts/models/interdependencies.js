'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	parse: function(response) {
        response.name = response.name.replace('.less', '').replace(/\//g, '.').substring(1);

        response.imports = response.dependencies.map(function(file) {
            return file.replace('.less', '').replace(/\//g, '.').substring(1);
        });

        response.dependencies = undefined;

		return response;
	}
});