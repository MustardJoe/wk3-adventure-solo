import api from '../api.js';

const name = document.getElementById('name');
const avatar = document.getElementById('avatar');
const dilithium = document.getElementById('dilithium');
const vulcan = document.getElementById('vulcan');

const user = api.getUser();

avatar.src = '../../assets/captain' + user.captain + '.png';
name.innerText = user.name;
dilithium.innerText = user.dilithium;