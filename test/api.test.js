import api from '../src/api.js';
const test = QUnit.test;
QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('signUp sets user and returns on getUser', (assert) => {
    // arrange
    const user = { 
        name: 'Jerry',
        captain: 'janeway',
        dilithium: 10,
        tough: 'seven',
        vulcan: 'tuvoc',
    };

    // act
    api.signUp(user);
    const result = api.getUser();

    // assert
    assert.deepEqual(result, user);
});