import questData from './quest/quest-data.js';
import findById from './find-by-id.js';

const api = {
    // Used by testing to control 
    // where API saves data
    storage: localStorage,
    // Methods for reading and saving data
    saveUser(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    getQuests() {
        return questData;
    },
    getQuest(id) {
        return findById(questData, id);
    },
};

export default api;