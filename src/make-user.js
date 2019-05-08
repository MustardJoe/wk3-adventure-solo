function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        captain: formData.get('captain'),
        dilithium: 10,
    };
        
    if(user.captain === 'janeway') {
        user.tough = 'Seven';
        user.vulcan = 'Tuvoc';
    }

    if(user.captain === 'sisko') {
        user.tough = 'Warf';
        user.vulcan = null;
    }

    if(user.captain === 'kirk') {
        user.tough = 'Kirk';
        user.vulcan = 'Spok';
    }

    return user;
}

export default makeUser;