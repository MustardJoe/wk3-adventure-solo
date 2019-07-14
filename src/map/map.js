import api from '../api.js';

//getting our dom eliments
const name = document.getElementById('name');
const avatar = document.getElementById('avatar');
const dilithium = document.getElementById('dilithium');
const vulcan = document.getElementById('vulcan');
const tough = document.getElementById('tough');

const user = api.getUser();

if(!user) {
    // no user? go back to sign up:
    window.location = './'; 
}

avatar.src = '../../assets/captain' + user.captain + '.png';
name.innerText = user.name;
dilithium.innerText = user.dilithium;
if(user.vulcan === null) {
    vulcan.innerText = 'N/A';
} else {
    vulcan.innerText = user.vulcan;
}
tough.innerText = user.tough;