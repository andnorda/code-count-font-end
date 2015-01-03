var Handlebars = require('hbsfy/runtime');

Handlebars.registerHelper('urlencode', function(s) {
    return encodeURIComponent(s);
});