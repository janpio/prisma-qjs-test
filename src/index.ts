import 'react-native-polyfill';
// import 'core-js/actual/url';
import "core-js";


import { PrismaClient } from '@prisma/client/edge.js';

class TestCase {
    public internal = new PrismaClient({ log: [{ level: 'query', emit: 'event' }] });

    constructor () {
    }

    async getUser() {
        const user = await this.internal.user.findFirst();
        console.log({user})
    }
}

console.log('hello?');

const testcase = new TestCase();
await testcase.getUser();