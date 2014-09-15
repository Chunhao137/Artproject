var app = require('./server/index.js');
var port = process.env.PORT || 8000;

app.listen(port);
console.log('Listening on port:', port);