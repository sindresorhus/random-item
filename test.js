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
