/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'lazy-in-eager',

  lazyLoading: true,

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    app.import('vendor/css/lazy-in-eager-appimport.css');
    app.import('vendor/js/lazy-in-eager-appimport.js');
    this.import('vendor/css/lazy-in-eager-thisimport.css');
    this.import('vendor/js/lazy-in-eager-thisimport.js', { prepend: true });
  }
});
