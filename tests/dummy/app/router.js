import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('artists', function() {
    this.route('default');
    this.route('sorted');
    this.route('paginated');
  });
});

export default Router;
