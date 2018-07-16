var Generator = require('yeoman-generator');
var syntaxParser = require('../common/syntax-parsing');//name of this file should changed

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('modulename', {type: String, required: true});
    }

    defaultMethod() {
        this.log('Popeye for modules!!!');
    }

    writing() {

        this.fs.copyTpl(
            this.templatePath('app/modules/template-module/_template-controller.js'),
            this.destinationPath('app/modules/'+ this.options.modulename +'-module/'+ this.options.modulename +'-controller.js'),
            { name: this.options.modulename }
        );
      
        this.fs.copyTpl(
            this.templatePath('app/modules/template-module/_template-model.js'),
            this.destinationPath('app/modules/'+ this.options.modulename +'-module/'+ this.options.modulename +'-model.js'),
            { name: this.options.modulename }
        );
      
        this.fs.copyTpl(
            this.templatePath('app/modules/template-module/_template-service.js'),
            this.destinationPath('app/modules/'+ this.options.modulename +'-module/'+ this.options.modulename +'-service.js'),
            { name: this.options.modulename }
        );
        
        console.log('require("'+ this.destinationPath('routes.js') +'")');
        syntaxParser.getRoutesSyntaxTreeByPath('require("'+ this.destinationPath('routes.js') +'")');

    }
}
