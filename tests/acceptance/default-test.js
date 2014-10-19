import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

var path = '/artists/default';
var totalRows = 7;

module('Acceptance: GridNx', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('should find no results with invalid query', function() {
  expect(1);

  visit(path);
  fillIn('.grid-nx input', '###');

  andThen(function() {
    equal(find('.grid-nx table tbody tr').length, 0);
  });
});

test('should find valid results', function() {
  expect(1);

  visit(path);
  fillIn('.grid-nx input', 'bl');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 2);
  });
});

test('should find results starting with 1 query char', function() {
  expect(1);

  visit(path);
  fillIn('.grid-nx input', 'a');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 2);
  });
});

test('should be case insensitive', function() {
  expect(1);

  visit(path);
  fillIn('.grid-nx input', 'mAd sEASon');

  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 1);
  });
});

test('should search on all valid query attributes', function() {
  expect(3);

  visit(path);

  fillIn('.grid-nx input', 'm');
  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 2);
  });

  fillIn('.grid-nx input', '1968');
  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 1);
  });

  fillIn('.grid-nx input', '198');
  andThen(function() {
    equal(findWithAssert('.grid-nx table tbody tr').length, 2);
  });
});


