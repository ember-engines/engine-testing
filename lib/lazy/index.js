/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'lazy',

  lazyLoading: true,

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included(app);

    app.import('vendor/css/lazy-appimport.css');
    app.import('vendor/js/lazy-appimport.js');
    this.import('vendor/css/lazy-thisimport.css');
    this.import('vendor/js/lazy-thisimport.js', { prepend: true });
  }
});
