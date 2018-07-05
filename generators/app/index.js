'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  // Ask for user input
  prompting: function() {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, function(answers) {
      this.props = answers;
      this.log(answers.name);
      done();
    }.bind(this)
  );
  },
  writing: {
    // copy configurations
    config: function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );
    },

    // copy application files
    app: function() {
      // index.js
      this.fs.copyTpl(
        this.templatePath('_index.js'),
        this.destinationPath('index.js')
      );

      // routes.js
      this.fs.copyTpl(
        this.templatePath('_routes.js'),
        this.destinationPath('routes.js')
      );

      // template module
      this.fs.copyTpl(
        this.templatePath('app/modules/template-module/_template-controller.js'),
        this.destinationPath('app/modules/custom-module/custom-controller.js'),

        this.templatePath('app/modules/template-module/_template-model.js'),
        this.destinationPath('app/modules/custom-module/custom-model.js'),

        this.templatePath('app/modules/template-module/_template-service.js'),
        this.destinationPath('app/modules/custom-module/custom-service.js')
      );
    },

    // install dependencies
    install: function() {
      this.installDependencies();
    }

  }
});
