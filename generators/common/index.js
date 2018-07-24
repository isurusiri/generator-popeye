var syntaxParser = require('../common/syntax-parser');
var CodeGenerator = require('../common/code-generator');
var escodegen = require('escodegen');

var codeGen = {
    addNewRoute: function(moduleInfo) {
        var codeGenerator = new CodeGenerator();
        var syntaxTree = syntaxParser.getRoutesSyntaxTreeByPath(moduleInfo.destPath);

        var importStatementTemplate = codeGenerator.newStatement({syntaxType: 'REQUIRE', module: moduleInfo.name});
        var newRouteTemplate = codeGenerator.newStatement({syntaxType: 'NEW_ROUTE', module: moduleInfo.name});

        syntaxTree.body.splice(syntaxTree.body.length - 1, 0, importStatementTemplate);
        syntaxTree.body.splice(syntaxTree.body.length - 1, 0, newRouteTemplate);

        var destCode = escodegen.generate(syntaxTree);
        syntaxParser.writeBackToFile(moduleInfo.destPath, destCode);
    }
}

module.exports = codeGen;