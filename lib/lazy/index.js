/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'lazy',

  lazyLoading: true,

  isDevelopingAddon: function() {
    return true;
  }
});
