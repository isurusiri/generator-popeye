var codeGen = {
    generateImport: function(module) {
        return {
            type: "VariableDeclaration",
            declarations: [
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
            ],
            kind: "var"
        }
    },
    generateAddRoute: function(module) {
        return {
            type: "ExpressionStatement",
            expression: {
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
                                value: module,
                                raw: "'/" + module + "'"
                    }
                ]
            }
        }
    }
};

var codeGenerator = {

};

module.exports = codeGenerator;