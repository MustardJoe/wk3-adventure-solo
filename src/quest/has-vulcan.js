// function vulcanNeed() {
    //     for(let i = 0; i < quests.length; i++) {
        
        //         for(let index = 0; index < quests[i].choices.length; index++) {
            //             console.log(quests[i].choices[index].vulcanNeed);
            //             questNeedsVulcan = 0;
            //         }
            
            
            
            //     }
            //     if(questNeedsVulcan === true) {}
            // }
function dilithiumUpdate(dilithiumAmount) {
    if(dilithiumAmount !== 0) {
        user.dilithium += dilithiumAmount;
    }
    return user;
}

export default dilithiumUpdate;