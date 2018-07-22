var Generator = require('yeoman-generator');
var syntaxParser = require('../common/syntax-parser');//name of this file should changed
var codeGenerator = require('../common/code-generator');
var escodegen = require('escodegen');

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
        //syntaxParser.getRoutesSyntaxTreeByPath('require("'+ this.destinationPath('routes.js') +'")');
        var syntaxTree = syntaxParser.getRoutesSyntaxTreeByPath(this.destinationPath('routes.js'));

        // need to refactor and have a factory like thing for below
        var importStatementTemplate = codeGenerator.importStatement(this.options.modulename);
        var newRouteTemplate = codeGenerator.newRouteStatement(this.options.modulename);

        syntaxTree.body.splice(syntaxTree.body.length - 1, 0, importStatementTemplate);
        syntaxTree.body.splice(syntaxTree.body.length - 1, 0, newRouteTemplate);

        var destCode = escodegen.generate(syntaxTree);
        syntaxParser.writeBackToFile(this.destinationPath('routes.js'), destCode);

    }
}
