
const test = QUnit.test;
import makeUser from '../src/make-user.js';
QUnit.module('make user');

test('create user object from form data', (assert) => {
    // arrange - call data from form, set up expected data
    const formData = new FormData();
    formData.set('name', 'Jerry');
    formData.set('captain', 'janeway');

    const expected = {
        name: 'Jerry',
        captain: 'janeway',
        tough: 'seven',
        vulcan: 'tuvoc',
        dilithium: 10,
    };

    // act - run input from 'user' through function
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, expected);
});
