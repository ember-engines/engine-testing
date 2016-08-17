/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'eager-in-lazy',

  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included(app);

    app.import('vendor/css/eager-in-lazy-appimport.css');
    app.import('vendor/js/eager-in-lazy-appimport.js');
    this.import('vendor/css/eager-in-lazy-thisimport.css');
    this.import('vendor/js/eager-in-lazy-thisimport.js', { prepend: true });
  }
});
