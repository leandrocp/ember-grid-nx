import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/grid-nx',

  paramsDefined: Ember.computed.and('grid', 'content'),
  header: Ember.computed.defaultTo('grid'),
  attrs: Ember.computed.mapBy('grid', 'attr'),

  searchableContent: Ember.computed.filter('grid', function(attr){
    if (Ember.isBlank(attr.query)) { return true; }
    return Ember.typeOf(attr.query) === "boolean" ? attr.query : false;
  }),
  searchableAttrs: Ember.computed.mapBy('searchableContent', 'attr'),

  body: function() {
    return this.get('paramsDefined') ? this._makeRows() : [];
  }.property('content.lenght', 'arrangedContent.[]', 'query'),

  _filter: function() {
    var grid    = this.get('grid');
    var content = this.get('content');
    var query   = this.get('query');
    var attrs   = this.get('searchableAttrs');
    var regex   = new RegExp(query, 'gi');

    return content.filter(function(item){
      if (Ember.isBlank(query)) { return true; }

      var props = item.getProperties(attrs);
      for (var prop in props) {
        if (props[prop] && props[prop].toString().match(regex)) {
          return true;
        }
      }
      return false;
    });
  },

  _makeRows: function() {
    var filteredContent = this._filter();
    var grid            = this.get('grid');
    var attrs           = this.get('attrs');
    var rows            = Ember.A();

    filteredContent.forEach(function(item){
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

    var content = this.get('content'),
    grid    = this.get('grid');

    if (Ember.isEmpty(content)) {
      Ember.Logger.error('[grid-nx] Content is empty! You should declare something like "content=arrangedContent".');
    }
    if (Ember.isEmpty(grid)) {
      Ember.Logger.error('[grid-nx] Grid param is empty! See the docs.');
    }
  }.on('didInsertElement'),

  teardownGridnx: function() {
    Ember.debug('[grid-nx] teardown');
  }.on('willDestroyElement'),

});

