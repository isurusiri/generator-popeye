var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // custome code
  }

  defaultMethod() {
    this.log('default method ran')
  }

  testMethod() {
    this.log('test method ran')
  }

};