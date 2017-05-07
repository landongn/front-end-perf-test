import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['transitionIn'],
  didRender() {
    var self = this;
    setTimeout(function () {
      self.set('transitionIn', true);
    });
  },
  transitionIn: false,
});
