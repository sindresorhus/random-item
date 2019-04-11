import {expectType} from 'tsd';
import randomItem = require('.');

expectType<string>(randomItem(['🐴', '🦄', '🌈']));
expectType<string | number>(randomItem(['🐴', '🦄', '🌈', 1]));
expectType<string | number>(randomItem(new Set(['🐴', '🦄', '🌈', 1])));
