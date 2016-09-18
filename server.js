var express = require('express'),
    route = require('./routes/routes');

var app = express();

var port = process.env.PORT || 8080;

app.get('/:name', route.dispHome);

app.listen(port);
console.log('Listening on port ' + port + '...');