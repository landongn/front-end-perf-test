import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service('store'),
  actions: {
    detailPageTransition(params) {
      this.get('store').recordForDetails(params.game);
      this.transitionToRoute('details.index', {id: params.game.id});
    }
  }
})