import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service('store'),
  model(params) {
    console.log(this.get('store.state.selectedProduct'));
    return this.get('store.state.selectedProduct');
  }
})