/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'lazy-in-lazy',

  lazyLoading: true,

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included(app);

    app.import('vendor/css/lazy-in-lazy-appimport.css');
    app.import('vendor/js/lazy-in-lazy-appimport.js');
    this.import('vendor/css/lazy-in-lazy-thisimport.css');
    this.import('vendor/js/lazy-in-lazy-thisimport.js', { prepend: true });
  }
});
