import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/grid-nx',

  requiredParams: Ember.computed.and('grid'),
  header: Ember.computed.alias('grid'),
  attrs: Ember.computed.mapBy('grid', 'attr'),

  searchableContent: Ember.computed.filter('grid', function(attr){
    if (Ember.isBlank(attr.query)) { return true; }
    return Ember.typeOf(attr.query) === "boolean" ? attr.query : false;
  }),
  searchableAttrs: Ember.computed.mapBy('searchableContent', 'attr'),

  body: function() {
    return this.get('requiredParams') ? this._makeRows() : [];
  }.property('content.lenght', 'arrangedContent.[]', 'query'),

  _content: function() {
    return this.get('content') || this.get('targetObject.arrangedContent');
  },

  _filteredContent: function() {
    var content = this._content();
    var query   = this.get('query');
    var attrs   = this.get('searchableAttrs');
    var regex   = new RegExp('^'+query+'.*', 'gi');

    return content.filter(function(item){
      if (Ember.isBlank(query)) { return true; }

      // https://github.com/Myslik/ember-grid/blob/af5b95b8402c130f72c88b3020f5ff53b42527dc/src/ember-grid.js#L16-L22
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
    var filteredContent = this._filteredContent();
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

    var content = this._content(),
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

