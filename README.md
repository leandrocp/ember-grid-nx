# ember-grid-nx

A simple yet effective grid. With builtin support for Bootstrap 3.

## Installation

* `npm install ember-grid-nx --save`

## Usage

You just have to follow 3 steps:

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
    {title:'Name', attr:'name'},
    {title:'Age', attr:'age'}
  ])
});
```

3) Finally put grid-nx helper in template:

```
{{grid-nx content=arrangedContent grid=grid}}
```

## Bootstrap

grid-nx will not add bootstrap into your project, but that´s an easy task. See:

https://github.com/unionups/ember-cli-bootstrap-sass

## Running Tests

* `ember test`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## See Also

https://github.com/Myslik/ember-grid

https://github.com/gevious/ember-filtertable
