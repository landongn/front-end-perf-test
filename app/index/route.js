import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service(),
    apiCache: Ember.inject.service('api-cache'),
    model() {
		return this.get('apiCache').getGameList().then(function(links) {
			return [links];
		});
		//return Ember.$.getJSON('https://psnow.playstation.com/store/api/pcnow/00_09_000/container/US/en/19/STORE-MSF192018-APOLLOC/')
			//.then(function(response) {
				////let small = response.links;
				////let medium = small.concat(small);
				////let huuj = medium.concat(medium);
				////return [small, small, small, small, small, small];
				//return [response.links];
			//});
    },
    setupController(controller, model) {
        controller.set('model', model);
    },
    //* feel free to ignore this code entirely *//
    actions: {

    }
});
