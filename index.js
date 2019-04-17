'use strict';

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError('Expected an array');
	}

	return array[Math.floor(Math.random() * array.length)];
};
