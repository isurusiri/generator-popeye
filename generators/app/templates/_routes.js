var router = require('express').Router();

var <%= modulename %>Controller = require('./app/modules/<%= modulename %>/<%= modulename %>-controller');

router.use('/<%= modulename %>', <%= modulename %>Controller);

module.exports = router;
