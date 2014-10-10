# ember-grid-nx

An simple yet effective grid. With builtin support for Bootstrap 3.

## Installation

* `npm install ember-grid-nx --save`

## Usage

You just have to follow 3 steps:

### Controller

1) Import and use GridNx mixin:

```javascript
import GridNx from 'ember-grid-nx/mixins/grid-nx';

export default Ember.ArrayController.extend(GridNx, {

});
```

2) And then define a grid structure:

```javascript
import GridNx from 'ember-grid-nx/mixins/grid-nx';

export default Ember.ArrayController.extend(GridNx, {
  grid: Ember.A([
    {title:'#', attr:'id', query:false},
    {title:'Nome', attr:'nome},
    {title:'Idade', attr:'idade'}
  ])
});
```

3) Finally put grid-nx helper in template:

```
{{grid-nx content=gridContent grid=grid}}
```

Note that gridContent is already defined by grid-nx so you don´t need to worry about it.


## Running Tests

* `ember test`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
