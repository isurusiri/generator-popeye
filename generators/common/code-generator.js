function requireStatement(module) {
    this.type = "VariableDeclaration";
    this.declarations = [
        {
            type: "VariableDeclarator",
            id: {
                    type: "Identifier",
                    name: module + "Controller"
                },
            init: {
                    type: "CallExpression",
                    callee: {
                        type: "Identifier",
                        name: "require"
                    },
                    arguments: [
                        {
                            type: "Literal",
                            value: "./app/modules/" + module + "/" + module + "-controller",
                            raw: "'./app/modules/" + module + "/" + module + "-controller'"
                        }
                    ]
                }
        }
    ];
    this.kind = "var";
}

function addRouteStatement(module) {
    this.type = "ExpressionStatement";
    this.expression = {
        type: "CallExpression",
        callee: {
            type: "MemberExpression",
            computed: false,
            object: {
                type: "Identifier",
                name: "router"
            },
            property: {
                type: "Identifier",
                name: "use"
            }
        },
        arguments: [
            {
                type: "Literal",
                value: "/" + module,
                raw: "/" + module
            },
            {
                type: "Identifier",
                name: module + "Controller"
            }
        ]
    };
}

function CodeGenerator() {}

// default is import statement
CodeGenerator.prototype.statementClass = requireStatement;

CodeGenerator.prototype.newStatement = function(options) {
    switch(options.syntaxType) {
        case "REQUIRE":
            this.statementClass = requireStatement;
            break;
        case "NEW_ROUTE":
            this.statementClass = addRouteStatement;
            break;
    }

    return new this.statementClass(options.module);
}

module.exports = CodeGenerator;
