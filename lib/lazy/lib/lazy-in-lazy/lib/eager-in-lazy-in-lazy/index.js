/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'eager-in-lazy-in-lazy',

  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/css/eager-in-lazy-in-lazy-appimport.css');
    app.import('vendor/js/eager-in-lazy-in-lazy-appimport.js');
    this.import('vendor/css/eager-in-lazy-in-lazy-thisimport.css');
    this.import('vendor/js/eager-in-lazy-in-lazy-thisimport.js', { prepend: true });
  }
});
