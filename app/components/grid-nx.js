import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/grid-nx',
  attributeBindings: ['content', 'grid', 'options'],

  header: function() {
    return this.get('grid');
  }.property(),

  body: function() {
    var content = this.get('content'),
        grid    = this.get('grid'),
        query   = this.get('query');

    var filteredContent = this._filter(grid, content, query);
    var rows = this._makeRows(grid, filteredContent);
    return rows;
  }.property('content.lenght', 'arrangedContent.[]', 'query'),

  _filter: function(grid, content, query) {
    var regex = new RegExp(query, 'gi');

    var searchableAttrs = grid.filter(function(item){
      if (Ember.isBlank(item.query)) { return true; }
      return Ember.typeOf(item.query) === "boolean" ? item.query : false;
    }).mapBy('attr');

    var filteredContent = content.filter(function(item){
      if (Ember.isBlank(query)) { return true; }

      var props = item.getProperties(searchableAttrs);
      for (var prop in props) {
        if (props[prop] && props[prop].toString().match(regex)) {
          return true;
        }
      }
      return false;
    });

    return filteredContent;
  },

  _makeRows: function(grid, content) {
    var attrs = Ember.A(grid.mapBy('attr'));
    var rows  = Ember.A();

    content.forEach(function(item){
      var row = Ember.A();
      attrs.forEach(function(attr){
        row.addObject(item.get(attr));
      });
      rows.pushObject(row);
    });

    return rows;
  },

  actions: {
    sortBy: function(property) {
      this.get('targetObject').send('sortBy', property);
    }
  },

  setupGridnx: function() {
    Ember.debug('[grid-nx] setup');
  }.on('didInsertElement'),

  teardownGridnx: function() {
    Ember.debug('[grid-nx] teardown');
  }.on('willDestroyElement'),

});

