/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'eager-in-eager',

  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/css/eager-in-eager-appimport.css');
    app.import('vendor/js/eager-in-eager-appimport.js');
    this.import('vendor/css/eager-in-eager-thisimport.css');
    this.import('vendor/js/eager-in-eager-thisimport.js', { prepend: true });
  }
});
