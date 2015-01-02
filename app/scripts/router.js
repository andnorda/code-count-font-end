var $ = require('jquery');
var Backbone = require('backbone');

var SearchModel = require('./models/search');
var IndexView = require('./views/index');

var StatsModel = require('./models/stats');
var StatsView = require('./views/stats');

var CommitCollection = require('./collections/commit');
var TimelineView = require('./views/timeline');

var CalendarModel = require('./models/calendar');
var CalendarView = require('./views/calendar');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'index',
		'stats?q=:query': 'stats',
		'timeline?repo=:repo': 'timeline',
		'calendar/:year': 'calendar'
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
	},

	timeline: function(repo) {
		var commits = new CommitCollection({
			repo: repo
		});
		commits.fetch();
		var timelineView = new TimelineView({
			collection: commits
		});
		timelineView.render();
		$('#app').html(timelineView.el);
	},

	calendar: function(year) {
		var calendarModel = new CalendarModel({
			year: year
		});
		$('#app').html(new CalendarView({
			model: calendarModel
		}).render().el);
	}
});