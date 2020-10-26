'use strict';

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError('Expected an array');
	}

	return array[Math.floor(Math.random() * array.length)];
};

module.exports.multiple = (array, count) => {
	if (!Number.isInteger(count) && count >= 0) {
		throw new TypeError('Expected a non-negative integer');
	}

	return [...new Array(count)].map(() => module.exports(array));
};
