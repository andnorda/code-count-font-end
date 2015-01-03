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

var ContributorCollection = require('./collections/contributor');
var ContributorListView = require('./views/contributor-list');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'index',
		'stats?q=:query': 'stats',
		'timeline?q=:query': 'timeline',
		'calendar/:year?q=:query': 'calendar',
		'contributors?q=:qurey': 'contributors'
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

	timeline: function(query) {
		var commits = new CommitCollection({
			repo: query
		});
		commits.fetch();
		var timelineView = new TimelineView({
			collection: commits
		});
		timelineView.render();
		$('#app').html(timelineView.el);
	},

	calendar: function(year, query) {
		var commits = new CommitCollection({
			repo: query
		});
		commits.fetch();
		var calendarModel = new CalendarModel({
			year: year
		});
		$('#app').html(new CalendarView({
			model: calendarModel,
			collection: commits
		}).render().el);
	},

	contributors: function(query) {
		var contributors = new ContributorCollection({
			repo: query
		});
		contributors.fetch();
		var contributorListView = new ContributorListView({
			collection: contributors
		});
		$('#app').html(contributorListView.render().el);
	}
});