var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var models = require("./models");

var routes = require('./routes/index');
var router = express.Router();

var bcrypt = require('bcrypt');

app.use(express.static(__dirname + '/views'));
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/app',express.static(__dirname + '/views/app'));
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json())


app.use('/', routes);


models.sequelize.sync().then(function () {
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
    });
});



/*
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/





