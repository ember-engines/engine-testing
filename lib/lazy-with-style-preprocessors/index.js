/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'lazy-with-style-preprocessors',

  lazyLoading: true,

  isDevelopingAddon: function() {
    return true;
  },
});
