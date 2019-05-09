import createQuestLink from '../src/quest/create-quest-link.js';

const test = QUnit.test;

QUnit.module('create quest link');


test('creates correct link html', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'tellarites',
        title: 'Conflict between the Tellarite and the Andorians',
    };

    const expected = 'http://127.0.0.1:5500/test/src/quest/quest.html?id=tellarites';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createQuestLink(quest);

    //Assert
    assert.deepEqual(dom.href, expected);
}); 