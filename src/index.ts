import 'react-native-polyfill';
import 'core-js/actual/url';

import { PrismaClient } from '@prisma/client';

class TestCase {
    public internal = new PrismaClient({ log: [{ level: 'query', emit: 'event' }] });

    constructor () {
        this.internal.user.findFirst();
    }
}

console.log('hello?');

new TestCase();