var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

require('./app');

Backbone.history.start();

