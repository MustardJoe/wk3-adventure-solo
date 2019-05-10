function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        captain: formData.get('captain'),
        dilithium: 10,
    };
        
    if(user.captain === 'janeway') {
        user.tough = 'Seven';
        user.vulcan = 'Tuvoc';
        user.hasVulcan = true;
    }

    if(user.captain === 'sisko') {
        user.tough = 'Warf';
        user.vulcan = null;
        user.hasVulcan = false;
    }

    if(user.captain === 'kirk') {
        user.tough = 'Kirk';
        user.vulcan = 'Spok';
        user.hasVulcan = true;
    }

    return user;
}

export default makeUser;