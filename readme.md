# random-item

> Get a random item from an array

## Install

```
$ npm install random-item
```

## Usage

```js
import randomItem from 'random-item';

randomItem(['🐴', '🦄', '🌈']);
//=> '🦄'

randomItem.multiple(['🐴', '🦄', '🌈'], 2);
//=> ['🌈', '🦄']
```

## Related

- [random-int](https://github.com/sindresorhus/random-int) - Generate a random integer
- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float
- [random-obj-key](https://github.com/sindresorhus/random-obj-key) - Get a random key from an object
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop) - Get a random property from an object
- [unique-random](https://github.com/sindresorhus/unique-random) - Generate random numbers that are consecutively unique
- [unique-random-array](https://github.com/sindresorhus/unique-random-array) - Get consecutively unique elements from an array
- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string) - Generate a cryptographically strong random string
