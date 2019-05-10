import quests from '../src/quest/quest-data.js';
//import api from '../src/api.js';

const test = QUnit.test;




// function vulcanNeed() {
    //     for(let i = 0; i < quests.length; i++) {
        
        //         for(let index = 0; index < quests[i].choices.length; index++) {
            //             console.log(quests[i].choices[index].vulcanNeed);
            //             questNeedsVulcan = 0;
            //         }
            
            
            
            //     }
            //     if(questNeedsVulcan === true) {}
            // }
            
            
QUnit.module('score quest choice');
            
test('kills you if you choose vulcan but dont have one', (assert) => {
                // arrange - call data from form, set up expected data
    const questNeedsVulcan = quests[0].choices[2].vulcanNeed;  //a quest with choice that needs a vulcan
    let actual = '';
                
    const user = {
        hasVulcan: false,
    };
    const userHasVulcan = user.hasVulcan;
                
                
                // act - run input from 'user' through function
    if(questNeedsVulcan !== userHasVulcan) {
        actual = 'dead';
    }
    else {
        actual = 'not dead';
    }

    // assert
    assert.equal(actual, 'dead');
});