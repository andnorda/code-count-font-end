'use strict';
var $ = require('jquery');
var Backbone = require('backbone');

var SearchModel = require('./models/search');
var IndexView = require('./views/index');

var Overview = require('./views/overview');

var StatsModel = require('./models/stats');
var StatsView = require('./views/stats');

var CommitCollection = require('./collections/commit');
var TimelineView = require('./views/timeline');

var CalendarModel = require('./models/calendar');
var CalendarView = require('./views/calendar');

var ContributorCollection = require('./collections/contributor');
var ContributorListView = require('./views/contributor-list');

var InterdependencyCollection = require('./collections/interdependencies');
var EdgeBundlingView = require('./views/edge-bundling');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'index',
		'overview?repo=:repo': 'overview',
		'stats?repo=:repo': 'stats',
		'timeline?repo=:repo': 'timeline',
		'calendar/:year?repo=:repo': 'calendar',
		'contributors?repo=:repo': 'contributors',
		'edge-bundling?repo=:repo': 'edgeBundling'
	},

	index: function() {
		var indexView = new IndexView({
			model: new SearchModel()
		});
		indexView.render();
		$('#app').html(indexView.el);
	},

	overview: function(repo) {
	    var overview = new Overview({
	        model: new Backbone.Model({
	            repo: repo
	        })
	    });
	    $('#app').html(overview.render().el);
	},

	stats: function(repo) {
		var statsModel = new StatsModel({
			repo: repo
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

	calendar: function(year, repo) {
		var commits = new CommitCollection({
			repo: repo
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

	contributors: function(repo) {
		var contributors = new ContributorCollection({
			repo: repo
		});
		contributors.fetch();
		var contributorListView = new ContributorListView({
			collection: contributors
		});
		$('#app').html(contributorListView.render().el);
	},

	edgeBundling: function(repo) {
        var interdependencies = new InterdependencyCollection({
            repo: repo
        });

	    var edgeBundlingView = new EdgeBundlingView({
	        collection: interdependencies
	    });
	    $('#app').html(edgeBundlingView.render().el);

        interdependencies.fetch();
	}
});