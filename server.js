var express = require('express'),
    route = require('./routes/routes');

var app = express();

app.get('/:name', route.dispHome);

app.listen(3000);
console.log('Listening on port 3000...');