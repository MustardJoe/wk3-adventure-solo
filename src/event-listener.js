import makeUser from './make-user.js';
import api from './api.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    console.log(formData);
    const user = makeUser(formData);
    console.log(user);

    api.signUp(user);
    //need to write map.html
    //window.location('map.html');
});