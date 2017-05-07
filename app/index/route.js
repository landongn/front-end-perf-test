import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service(),
    apiCache: Ember.inject.service('api-cache'),
    model() {
		return this.get('apiCache').getGameList().then(function(links) {
			return [links];
		});
    },
    setupController(controller, model) {
        controller.set('model', model);
    },
    //* feel free to ignore this code entirely *//
    actions: {

    }
});
