import DS from 'ember-data';

var Artist = DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('number')
});

Artist.reopenClass({
  FIXTURES: [
    {id:1, name:'Alice In Chains', year:1987},
    {id:2, name:'Black Label Society', year:1998},
    {id:3, name:'Black Sabbath', year:1968},
    {id:4, name:'Metallica', year:1981},
    {id:5, name:'Mad Season', year:1994}
  ]
});

export default Artist;
