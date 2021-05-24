import test from 'ava';
import stableFunction from 'stable-fn';
import randomItem from './index.js';

const fixture = ['a', 'b', 'c', 'd', 'e'];

test('main', t => {
	t.false(stableFunction(() => randomItem(fixture)));

	for (let index = 0; index < 1000; index++) {
		t.is(typeof randomItem(fixture), 'string');
	}
});

test('main - argument validation', t => {
	t.throws(() => {
		randomItem('a');
	}, {
		instanceOf: TypeError,
		message: 'Expected an array'
	});
});

test('.multiple()', t => {
	const result = randomItem.multiple(fixture, 4);
	t.is(result.length, 4);
	t.true(result.every(value => fixture.includes(value)));
});

test('.multiple() - argument validation', t => {
	t.throws(() => {
		randomItem.multiple(fixture, -1);
		randomItem.multiple(fixture, 'a');
	}, {
		instanceOf: TypeError,
		message: 'Expected a non-negative integer'
	});
});
