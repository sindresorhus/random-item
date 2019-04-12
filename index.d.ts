/**
Get a random item from an array.

@example
```
import randomItem = require('random-item');

randomItem(['🐴', '🦄', '🌈']);
//=> '🦄'
```
*/
declare function randomItem<T>(input: readonly T[]): T;

export = randomItem;
