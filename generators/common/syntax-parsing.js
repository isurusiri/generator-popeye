var esprima = require('esprima');
var fs = require('fs');

var syntaxParser = {
    getRoutesSyntaxTreeByPath: function(path) {
        var code = fs.readFileSync(path, 'utf8');
        var routesSyntax = esprima.parseScript(code);
        console.log('start of syntax');
        console.log(JSON.stringify(routesSyntax));
        console.log('end of syntax');
        return routesSyntax;
    },

    writeBackToFile: function(path, code) {
        fs.writeFileSync(path, code);
    }
}

module.exports = syntaxParser;
