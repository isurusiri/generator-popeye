var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);

    // custome code
    this.argument('appname', { type: String, required: true, default: this.appname })

  }

  defaultMethod() {
    this.log('Popeye!!!')    
  }

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'dbcon',
      message: 'Enter the connection string for the mongodb',
      default: 'mongodb://localhost:27017/' + this.options.appname
    }]).then((answers) => {
      this.options.dbcon = answers.dbcon
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { name: this.options.appname }
    );

    this.fs.copyTpl(
      this.templatePath('_index.js'),
      this.destinationPath('index.js'),
      { dbconstring: this.options.dbcon }
    );

    this.fs.copyTpl(
      this.templatePath('_routes.js'),
      this.destinationPath('routes.js')
    );

    this.fs.copyTpl(
      this.templatePath('app/modules/template-module/_template-controller.js'),
      this.destinationPath('app/modules/root-module/root-controller.js'),
      { name: "root" }
    );

    this.fs.copyTpl(
      this.templatePath('app/modules/template-module/_template-model.js'),
      this.destinationPath('app/modules/root-module/root-model.js'),
      { name: "root" }
    );

    this.fs.copyTpl(
      this.templatePath('app/modules/template-module/_template-service.js'),
      this.destinationPath('app/modules/root-module/root-service.js'),
      { name: "root" }
    );

  }

  install() {
    this.npmInstall();
  }

};