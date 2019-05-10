import api from './api.js';

function loadProfile() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const dilithium = document.getElementById('dilithium');
    const vulcan = document.getElementById('vulcan');
    const tough = document.getElementById('tough');
    
    const user = api.getUser();
    
    if(!user) {
        window.location = './';
    }
    
    avatar.src = '../assets/captain' + user.captain + '.png';
    name.textContent = user.name;
    dilithium.textContent = user.dilithium;
    if(user.vulcan === null) {
        vulcan.textContent = 'N/A';
    } else {
        vulcan.textContent = user.vulcan;
    }
    tough.textContent = user.tough;
}

export default loadProfile;