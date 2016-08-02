import buildRoutes from 'ember-engines/routes';
import importTarget from './lazy-in-eager-import-target';

export default buildRoutes(function() {
  var result = importTarget;
  return result;
});
