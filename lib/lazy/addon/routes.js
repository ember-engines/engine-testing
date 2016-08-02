import buildRoutes from 'ember-engines/routes';
import something from './something';

export default buildRoutes(function() {
  var b = something;
  return b;
});
