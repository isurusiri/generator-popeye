var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var <%= name %>Schema = new Schema({
    description: String
});

module.exports = mongoose.model('<%= name %>', <%= name %>Schema);
