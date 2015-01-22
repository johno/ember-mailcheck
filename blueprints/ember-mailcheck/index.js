module.exports = {
  description: 'ember-mailcheck',

  afterInstall: function(options) {
    return this.addBowerPackageToProject('mailcheck');
  }
};
