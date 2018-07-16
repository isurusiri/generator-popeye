var esprima = require('esprima');

var syntaxParser = {
    getRoutesSyntaxTreeByPath: function(path) {
        var routesSyntax = esprima.parseScript(path);
        console.log('start of syntax');
        console.log(JSON.stringify(routesSyntax));
        console.log('end of syntax');
    }
}

module.exports = syntaxParser;
