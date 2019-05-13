//function checks to see if you need a vulcan for selected quest answer, then checks
//to make sure you have one
function vulcanTest(vulcanNeeded, vulcanHave) {
    if(vulcanNeeded && !vulcanHave) {
        console.log('you died because of poor planning'); //change what this does when i add ending page
    }
    else {
        return;
    }
}

export default vulcanTest;
