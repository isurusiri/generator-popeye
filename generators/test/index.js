var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    
    constructor(args, opts) {
        super(args, opts);

        this.argument('testscriptname', {type: String, required: true});
    }

    defaultMethod() {
        console.log(`Creating a test script with name ${this.options.testscriptname} !!!`);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('template-test.js'),
            this.destinationPath(`test/${this.options.testscriptname}-test.js`)
        );
    }

}
