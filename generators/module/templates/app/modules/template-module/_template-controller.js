var router = require('express').Router();
var <%= name %>Service = require('./<%= name %>-service')();

var <%= name %> = {
    getAll: function(req, res) {
        
    },

    get: function(req, res) {
        
    },

    create: function(req, res) {
        
    },

    update: function(req, res) {
        
    },

    remove: function(req, res) {
        
    }
};

router.get('/', <%= name %>.getAll);
router.post('/', <%= name %>.create);
router.get('/:<%= name %>_id', <%= name %>.get)
router.put('/:<%= name %>_id', <%= name %>.update);
router.delete('/:<%= name %>_id', <%= name %>.remove);

module.exports = router;
