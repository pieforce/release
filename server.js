var express = require('express'),
    route = require('./routes/routes');

var app = express();

var port = process.env.PORT || 8080;

app.get('/', route.dispHome);
app.get('/:name', route.dispGreeting);

app.listen(port);
console.log('Listening on port ' + port + '...');