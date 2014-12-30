var $ = require('jquery');
var Backbone = require('backbone');

var SearchModel = require('./models/search');
var IndexView = require('./views/index');

var StatsView = require('./views/stats');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'index',
		'stats?q=:query': 'stats'
	},

	index: function() {
		var indexView = new IndexView({
			model: new SearchModel()
		});
		indexView.render();
		$('#app').html(indexView.el);
	},

	stats: function(query) {
		var model = new Backbone.Model();
		model.set('query', query);
		var statsView = new StatsView({
			model: model
		});
		statsView.render();
		$('#app').html(statsView.el);
	}
});