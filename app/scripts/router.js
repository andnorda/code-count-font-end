var $ = require('jquery');
var Backbone = require('backbone');

var SearchModel = require('./models/search');
var IndexView = require('./views/index');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'index'
	},

	index: function() {
		var indexView = new IndexView({
			model: new SearchModel()
		});
		indexView.render();
		$('#app').html(indexView.el);
	}
});