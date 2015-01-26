/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-mailcheck',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/mailcheck/src/mailcheck.js');
    this.app.import('vendor/ember-mailcheck/shim.js', {
      type: 'vendor',
      exports: { 'mailcheck': ['default'] }
    });
  }
};
