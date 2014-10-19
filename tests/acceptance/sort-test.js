import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

var path = '/artists/sorted';
var totalRows = 7;

module('Acceptance: GridNx', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('should respect default sort', function() {
  expect(1);

  visit(path);

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody td:first').text(), '1');
  });
});

test('should reorder on header click', function() {
  expect(1);

  visit(path);
  click('.grid-nx table thead th:first');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody td:first').text(), totalRows);
  });
});

test('should have the same quantity on reorder', function() {
  expect(1);

  visit(path);
  click('.grid-nx table thead th:first');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, totalRows);
  });
});

