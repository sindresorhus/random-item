'use strict';

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError('Expected an array');
	}

	return array[Math.floor(Math.random() * array.length)];
};

module.exports.multiple = (array, count) => {
	if (!Array.isArray(array)) {
		throw new TypeError('Expected an array');
	}

	if (!Number.isInteger(count) && count >= 0) {
		throw new TypeError('Expected a non-negative integer');
	}

	array = [...array];

	return [...new Array(count)].map(() => array.splice(Math.floor(Math.random() * array.length), 1)[0]).slice(0, count);
};
