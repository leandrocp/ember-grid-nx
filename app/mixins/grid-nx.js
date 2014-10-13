import Ember from 'ember';

export default Ember.Mixin.create({
  /*
  gridContent: function(){
    return this.get('arrangedContent');
  }.property('sortProperties', 'sortAscending'),
  */

  actions: {
    sortBy: function(property) {
      this.set('sortProperties', [property]);
      this.set('sortAscending', !this.get('sortAscending'));
    }
  },

});
