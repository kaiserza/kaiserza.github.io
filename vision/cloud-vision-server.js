var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

var vision = require('@google-cloud/vision')({
  projectId: 'testing-vision-159703',
  keyFilename: '/keyfile/Testing-Vision-4e6d3b6d9f5d.json'
});



http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});