import {expectType} from 'tsd';
import randomItem = require('.');

expectType<string>(randomItem(['🐴', '🦄', '🌈']));
expectType<string | number>(randomItem(['🐴', '🦄', '🌈', 1]));
