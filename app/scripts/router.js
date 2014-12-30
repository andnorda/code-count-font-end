var $ = require('jquery');
var Backbone = require('backbone');

var SearchModel = require('./models/search');
var IndexView = require('./views/index');

var StatsModel = require('./models/stats');
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
		var statsModel = new StatsModel({
			query: query
		});
		statsModel.fetch();

		var statsView = new StatsView({
			model: statsModel
		});
		statsView.render();
		$('#app').html(statsView.el);
	}
});