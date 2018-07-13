var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('<%= dbconstring %>');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = require('./routes');
app.use('/api', router);

var port = 8085;
app.listen(port);

console.log('/api is available at: ' + port);
