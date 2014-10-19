import Ember from 'ember';

export default Ember.Mixin.create({
  paginatedContent: function(){
    var page = this.get('page'),
        perPage = this.get('perPage'),
        start = (page - 1) * perPage,
        end = page * perPage;

    return this.get('arrangedContent').slice(start, end);
  }.property('arrangedContent.[]', 'page', 'perPage'),
 
  actions: {
    sortBy: function(property) {
      this.set('sortProperties', [property]);
      this.set('sortAscending', !this.get('sortAscending'));
    }
  }
});
