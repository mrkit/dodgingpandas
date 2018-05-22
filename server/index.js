const express = require('express'),
      server = express(),
      r = require('path').resolve,
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      db = require('./db');

server.use([
  express.static(r(__dirname, '..', 'dist')),
  morgan('dev'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
]);

server.use('/api', require('./api'));
server.get('/', (req, res) => res.sendFile('index.html'));

server.use((err, req, res, next) => {
  if(err) console.log(`Catch-all Server Error Message: ${err.message}`);
});

db.conn.sync({ force: true })
.then(() => server.listen(3010, console.log('listening on port 3010')));