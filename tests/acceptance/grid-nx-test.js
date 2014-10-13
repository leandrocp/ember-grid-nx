import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: GridNx', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /grid-nx', function() {
  visit('/artists');

  andThen(function() {
    equal(currentPath(), 'artists.index');
  });
});
