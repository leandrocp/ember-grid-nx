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

test('should respect default sort', function() {
  expect(1);

  visit('/artists');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody td:first').text(), '1');
  });
});

test('should reorder on header click', function() {
  expect(1);

  visit('/artists');
  click('.grid-nx table thead th:first');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody td:first').text(), '5');
  });
});

test('should have the same quantity on reorder', function() {
  expect(1);

  visit('/artists');
  click('.grid-nx table thead th:first');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 5);
  });
});

test('should find valid results', function() {
  expect(1);

  visit('/artists');
  fillIn('.grid-nx input', 'bl');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 2);
  });
});

test('should search on all valid query attributes', function() {
  expect(3);

  visit('/artists');

  fillIn('.grid-nx input', 'm');
  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 2);
  });

  fillIn('.grid-nx input', '1968');
  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 1);
  });

  fillIn('.grid-nx input', '19');
  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 5);
  });
});


