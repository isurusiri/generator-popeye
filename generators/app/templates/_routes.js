var router = require('express').Router();

var <%= modulename %>Controller = require('./app/modules/status/<%= modulename %>-controller');

router.use('/<%= modulename %>', <%= modulename %>Controller);

module.exports = router;
