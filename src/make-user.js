function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        captain: formData.get('captain'),
        dilithium: 10,
    };
        
    if(user.captain === 'janeway') {
        user.tough = 'seven';
        user.vulcan = 'tuvoc';
    }

    if(user.captain === 'sisko') {
        user.tough = 'warf';
        user.vulcan = null;
    }

    if(user.captain === 'kirk') {
        user.tough = 'kirk';
        user.vulcan = 'spok';
    }

    return user;
}

export default makeUser;