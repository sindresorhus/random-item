'use strict';

module.exports = iterable => {
	if (!Array.isArray(iterable) && typeof iterable[Symbol.iterator] !== 'function') {
		throw new TypeError('Expected an array or an iterable');
	}

	const array = Array.isArray(iterable) ? iterable : [...iterable];

	return array[Math.floor(Math.random() * array.length)];
};
