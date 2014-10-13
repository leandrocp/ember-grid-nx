import Ember from 'ember';
import GridNxMixin from 'ember-grid-nx/mixins/grid-nx';

module('GridNxMixin');

// Replace this with your real tests.
test('it works', function() {
  var GridNxObject = Ember.Object.extend(GridNxMixin);
  var subject = GridNxObject.create();
  ok(subject);
});
