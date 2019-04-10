import test from 'ava';
import stableFn from 'stable-fn';
import randomItem from '.';

const fixture = ['a', 'b', 'c', 'd', 'e'];
const iterableFixture = new Set(fixture);

test('main', t => {
	t.false(stableFn(() => randomItem(fixture)));
	t.false(stableFn(() => randomItem(iterableFixture)));

	for (let i = 0; i < 1000; i++) {
		t.is(typeof randomItem(fixture), 'string');
		t.is(typeof randomItem(iterableFixture), 'string');
	}
});
