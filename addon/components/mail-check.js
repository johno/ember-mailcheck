import Ember from 'ember';

export default Ember.Component.extend({
  type: 'email',
  name: 'email',
  value: '',
  placeholder: '',
  classNames: ['mailcheck'],

  actions: {
    mailcheck: function() {
      console.log('ember-mailcheck action called');
    }
  }
});
