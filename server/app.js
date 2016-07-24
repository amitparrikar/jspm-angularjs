/**
 * Created by parrikaa on 23/07/16.
 */
var express = require('express'),
    server = express(),
    port = 2000;

server.use(express.static(__dirname + '/../client'));
server.listen(port);

console.log('Server listening on localhost:' + port + '/');