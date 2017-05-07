import Ember from 'ember';

export default Ember.Service.extend({
    cache: {

    },
    get: function(key) {
        return cache[key];
    },
    put: function(key, data) {
        cache[key] = data;
    },
    clear: function(key) {
        cache[key] = null;
    },
    getGameList: function() {
        var self = this;
        if (!self.cache['gameList']) {
            return new Promise(function(resolve, reject) {
                self.retrieveListFromApi().then(function(links) {
                    self.cache['gameList'] = links;
                    resolve(self.cache['gameList']);
                });
            });
        } else {
            return new Promise(function(resolve, reject) {
                resolve(self.cache['gameList']);
            });
        }
    },
    retrieveListFromApi: function() {
        return Ember.$.getJSON('https://psnow.playstation.com/store/api/pcnow/00_09_000/container/US/en/19/STORE-MSF192018-APOLLOC/')
            .then(function(response) {
                return response.links;
            });
    }
});
