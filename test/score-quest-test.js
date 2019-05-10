import quests from '../src/quest/quest-data.js';
import api from '../src/api.js';

const test = QUnit.test;
            
QUnit.module('score quest choice');
            
test('kills you if you choose vulcan but dont have one', (assert) => {
    // arrange - call data from form, set up expected data
    const questNeedsVulcan = quests[0].choices[2].vulcanNeed;  //a quest with choice that needs a vulcan
    let result = '';
                
    const user = {
        hasVulcan: false,
    };
    const userHasVulcan = user.hasVulcan;
                           
    // act - run input from 'user' through function
    if(questNeedsVulcan !== userHasVulcan) {
        result = 'dead';
    }
    else {
        result = 'not dead';
    }

    // assert
    assert.equal(result, 'dead');
});

test('updates dilithium', (assert) => {
    // arrange - call data from form, set up expected data
   const user = api.getUser();
                           
    // act - run input from 'user' through function
    

    // assert
    assert.equal(result, 'dead');
});