import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service('store'),
  model(params) {
    return params;
  },
  setupController(ctrl, model) {
    ctrl.set('model', model);
    new Ember.RSVP.Promise((resolve) => {
      Ember.$.getJSON(`https://psnow.playstation.com/store/api/pcnow/00_09_000/container/US/en/19/${model.game_id || model.id}`)
      .then(d => {
        ctrl.set('model', d);
        resolve();
      });
    });
  }

})