import buildRoutes from 'ember-engines/routes';
import importTarget from './eager-in-eager-import-target';

export default buildRoutes(function() {
  var result = importTarget;
  return result;
});
