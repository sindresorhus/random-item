/**
Get a random item from an [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol).

@example
```
import randomItem = require('random-item');

randomItem(['🐴', '🦄', '🌈']);
//=> '🦄'

randomItem(new Set(['🐴', '🦄', '🌈']);
//=> '🌈'
```
*/
declare function randomItem<T>(input: Iterable<T>): T;

export = randomItem;
