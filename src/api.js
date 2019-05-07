const api = {
    // Used by testing to control 
    // where API saves data
    storage: localStorage,
    // Methods for reading and saving data
    signUp(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    }
};

export default api;