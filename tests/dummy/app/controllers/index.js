import Ember from 'ember';
import GridNx from '../mixins/grid-nx';

export default Ember.ArrayController.extend(GridNx, {
  sortProperties: ['name'],
  sortAscending: true,

  /*
   * Grid´s structure
   * All fields are queried by default, unless you define query:false
   * If you want to be explicit, define query:true
   */
  grid: Ember.A([
    {title:'#', attr:'id', query:false},
    {title:'Name', attr:'name', query:true},
    {title:'Year', attr:'year'}
  ])

});

