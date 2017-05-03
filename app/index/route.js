import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return Ember.$.getJSON('https://psnow.playstation.com/store/api/pcnow/00_09_000/container/US/en/19/STORE-MSF192018-APOLLOC/')
    .then(function(response) {
      let small = response.links;
      let medium = small.concat(small);
      return medium;
    });
  },
  setupController(controller, model) {
    controller.set('model', model);
  },
  actions: {

  }
});
