/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'eager',

  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    app.import('vendor/css/eager-appimport.css');
    app.import('vendor/js/eager-appimport.js');
    this.import('vendor/css/eager-thisimport.css');
    this.import('vendor/js/eager-thisimport.js', { prepend: true });
  }
});
