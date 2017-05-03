import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('details', {path: '/details/:game_id'}, function() {
    this.route('gallery');
  });
});

export default Router;
