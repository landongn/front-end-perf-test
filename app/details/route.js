import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service('store'),
    apiCache: Ember.inject.service('api-cache'),
    model(params) {
        return params;
    },
    setupController(ctrl, model) {
        ctrl.set('model', model);
		var selectedProduct = this.get('store').getRecord();
		return this.get('apiCache').getGameDetails(model.game_id || model.id).then(function(d) {
			return ctrl.set('model', d);
		});
    }
})
