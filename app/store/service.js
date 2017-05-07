import Ember from 'ember';

export default Ember.Service.extend({
    state: {
        selectedProduct: null
    },

    getRecord() {
        return this.state.selectedProduct;
    },
    recordForDetails(rec) {
        this.set('state.selectedProduct', rec);
    }
});
