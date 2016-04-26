import Ember from 'ember';

export default Ember.Controller.extend({

  appData: Ember.inject.service('application-data'),
  session: Ember.inject.service('session'),

  apps: Ember.computed('model.@each', 'model.@each', function() {
    return this.get('model.apps')
      .rejectBy('alias', 'hapticDesktop');
  }),

  users: Ember.computed('model.@each', 'model.@each', function() {
    return this.get('model.users')
      .rejectBy('isAdmin', true);
  }),

  sessions: Ember.computed('model.@each', 'model.@each', function() {
    return this.get('model.sessions');
  }),

  actions : {
    goToApps() {
      this.transitionToRoute('protected.apps');
    },
    goToUsers() {
      this.transitionToRoute('protected.users');
    },
    goToConnectedUsers() {
      this.transitionToRoute('protected.histories');
    },
  }
});
