import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['transitionIn'],
  image: Ember.computed('game', function () {
    return this.get('game.images').findBy('type', 10);
  }),
  didRender() {
    var self = this;
    setTimeout(function () {
      self.set('transitionIn', true);
    }, (this.get('index') * 13 * Math.random()));
  },
  transitionIn: false,
  click() {
    this.detailPageTransition({game: this.get('game')});
  }
});
