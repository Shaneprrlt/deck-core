import Ember from 'ember';
import DS from 'ember-data';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({

  routing: Ember.inject.service('-routing'),
  store: Ember.inject.service(),
  casino: storageFor('casino'),

  selectedApp: Ember.computed('casino.selectedAppId', function() {
    let appId = this.get('casino.selectedAppId');
    if(appId) {
      return this.get('store').peekRecord('app', appId);
    }
  }),

  selectedDeck: Ember.computed('casino.selectedDeckId', function() {
    let deckId = this.get('casino.selectedDeckId');
    if(deckId) {
      return this.get('store').peekRecord('deck', deckId);
    }
  });

  fullscreen: Ember.computed('casino.fullscreen', function() {
    return this.get('casino.fullscreen');
  }),

  menuOpen: Ember.computed('casino.menuOpen', function() {
    return this.get('casino.menuOpen');
  }),

  toggleFullscreen() {
    this.set('casino.fullscreen', !this.get('casino.fullscreen'));
  },

  toggleMenu() {
    this.set('casino.menuOpen', !this.get('casino.menuOpen'));
  },

  setSelectedApp(app) {
    this.clearSelected();
    this.set('casino.selectedAppId', app.get('id'));
  },

  setSelectedDeck(deck) {
    this.clearSelected();
    this.set('casino.selectedDeckId', deck.get('id'));
  },

  clearSelected() {
    this.set('casino.selectedAppId', null);
    this.set('casino.selectedDeckId', null);
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
