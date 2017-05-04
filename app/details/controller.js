import Ember from 'ember';

export default Ember.Controller.extend({
  heroImage: Ember.computed('model', function () {
    const model = this.get('model');
    if (!model.images) {return;}
    let ret = null;
    ret = model.images.filter(f => {
      if (f.type === 14) {
        return f;
      }
    });
    if (ret.length) {
      return ret[0].url;
    }
  }),
  backgroundImage: Ember.computed('model', function () {
    const model = this.get('model');
    if (!model.images) {return;}
    let ret = null;
    ret = model.images.filter(f => {
      if (f.type === 13) {
        return f;
      }
    });
    if (ret.length) {
      return ret[0].url;
    }
  })
})