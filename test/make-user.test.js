
const test = QUnit.test;

QUnit.module('make user');

function makeUser(formData) {
    const user = {

    }
}

test('create user object from form data', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('name', 'Jerry');
    formData.set('captain', 'janeway');

    const expected = {
        name: 'Jerry',
        captain: 'janeway',
        tough: 'seven',
        
        dilithium: 10
    };

    // act
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, expected);
});
