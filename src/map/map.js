import api from '../api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from '../quest/create-quest-link.js';

loadProfile();

const quests = api.getQuests();
const user = api.getUser();
const section = document.getElementById('missions');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    section.appendChild(link);
    
    // if(user.completed[quest.id]) {
    //     link.classList.add('completed');
    // }  add this back in when completed quest stuff is ready
}