var Promise = require('promise');
var <%= name %> = require('./<%= name %>-model');

function <%= name %>Services() {
    function get<%= name %>s() {
        
    }

    function get<%= name %>(<%= name %>Id) {
        
    }

    function create<%= name %>(<%= name %>_) {
        
    }

    function update<%= name %>(<%= name %>Id, updated<%= name %>) {
        
    }

    function remove<%= name %>(<%= name %>Id) {
        
    }

    return {
        get<%= name %>s: get<%= name %>s,
        get<%= name %>: get<%= name %>,
        create<%= name %>: create<%= name %>,
        update<%= name %>: update<%= name %>,
        remove<%= name %>: remove<%= name %>
    }
}

module.exports = <%= name %>Services;
