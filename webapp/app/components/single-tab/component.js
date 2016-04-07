import Ember from 'ember';

export default Ember.Component.extend({

  isVisible: false,
  connectionName: null,

  actions: {
    toggleSingleTab() {
      this.sendAction('onClose', this.get('connectionName'));
      this.toggleProperty('isVisible');
    },
  }
});
