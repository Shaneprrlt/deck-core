import Ember from 'ember';
import DS from 'ember-data';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({

  routing: Ember.inject.service('-routing'),
  store: Ember.inject.service(),
  casino: storageFor('casino'),

  fullscreen: Ember.computed('casino.fullscreen', function() {
    return this.get('casino.fullscreen');
  }),

  menuOpen: Ember.computed('casino.menuOpen', function() {
    return this.get('casino.menuOpen');
  }),

  selectedApp: null,
  selectedDeck: null,

  toggleFullscreen() {
    this.set('casino.fullscreen', !this.get('casino.fullscreen'));
  },

  toggleMenu() {
    this.set('casino.menuOpen', !this.get('casino.menuOpen'));
  },

  setSelectedApp(app) {
    this.clearSelected();
    this.set('selectedApp', app);
  },

  setSelectedDeck(deck) {
    this.clearSelected();
    this.set('selectedDeck', deck);
  },

  clearSelected() {
    this.set('selectedApp', null);
    this.set('selectedDeck', null);
  },

  openCardFromAppDeck(card, app) {
    this.setSelectedApp(app);
    this.get('routing').transitionTo('app.index.cards.show', card);
  },

  openCardFromDeck(deck, card) {
    this.setSelectedDeck(deck);
    this.get('routing').transitionTo('app.index.cards.show', card);
  }

});
