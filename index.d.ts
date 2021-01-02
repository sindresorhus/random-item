declare const randomItem: {
	/**
	Get a random item from an array.

	@example
	```
	import randomItem = require('random-item');

	randomItem(['🐴', '🦄', '🌈']);
	//=> '🦄'
	```
	*/
	<T>(input: readonly T[]): T;

	/**
	Get multiple random items from an array.

	This is the equivalent of calling `randomItem()` multiple times so the returned array may contain duplicates.

	@example
	```
	import randomItem = require('random-item');

	randomItem.multiple(['🐴', '🦄', '🌈'], 2);
	//=> ['🌈', '🦄']
	```
	*/
	multiple<T>(input: readonly T[], count: number): T[];
}

export = randomItem;
