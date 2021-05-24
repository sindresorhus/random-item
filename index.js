export default function randomItem(array) {
	if (!Array.isArray(array)) {
		throw new TypeError('Expected an array');
	}

	return array[Math.floor(Math.random() * array.length)];
}

randomItem.multiple = (array, count) => {
	if (!(Number.isInteger(count) && count >= 0)) {
		throw new TypeError('Expected a non-negative integer');
	}

	return [...Array.from({length: count})].map(() => randomItem(array));
};
