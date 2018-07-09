var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // custome code
  }

  defaultMethod() {
    this.log('Popeye!!!')
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { name: 'yeoman magic' }
    );

    this.fs.copyTpl(
      this.templatePath('_index.js'),
      this.destinationPath('index.js')
    );

    this.fs.copyTpl(
      this.templatePath('_routes.js'),
      this.destinationPath('routes.js')
    );

  }

  install() {
    this.npmInstall();
  }

};