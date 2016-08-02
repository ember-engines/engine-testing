/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'lazy',

  lazyLoading: true,

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    app.import('vendor/css/appimport.css');
    app.import('vendor/js/appimport.js');
    this.import('vendor/css/thisimport.css');
    this.import('vendor/js/thisimport.js', { prepend: true });
  }
});
