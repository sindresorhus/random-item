import test from 'ava';
import stableFn from 'stable-fn';
import randomItem from '.';

const fixture = ['a', 'b', 'c', 'd', 'e'];

test('main', t => {
	t.false(stableFn(() => randomItem(fixture)));

	for (let i = 0; i < 1000; i++) {
		t.is(typeof randomItem(fixture), 'string');
	}
});

test('.multiple()', t => {
	const result = randomItem.multiple(fixture, 4);

	t.is(result.length, 4);
	t.true(result.every(value => fixture.includes(value)));
});
