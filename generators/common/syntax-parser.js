var esprima = require('esprima');
var fs = require('fs');

var syntaxParser = {
    getRoutesSyntaxTreeByPath: function(path) {
        var code = fs.readFileSync(path, 'utf8');
        var routesSyntax = esprima.parseScript(code);
        return routesSyntax;
    },

    writeBackToFile: function(path, code) {
        fs.writeFileSync(path, code);
    }
}

module.exports = syntaxParser;
