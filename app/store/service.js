import Ember from 'ember';

export default Ember.Service.extend({
  state: {
    selectedProduct: null
  },

  recordForDetails(rec) {
    this.set('state.selectedProduct', rec);
  }
});
