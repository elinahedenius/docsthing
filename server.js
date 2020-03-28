var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var mysql = require('mysql');

//create a mysql connection
var db = mysql.createConnection({
  host: 'localhost',
  user: 'docsthing',
  password: 'testPassword',
  database: 'docsthing'
});

//connect to database
db.connect(function(err) {
  if (err) throw err;
  console.log('connected to database');
});

//start server
http.listen(3000, function () {
  console.log('server started on port 3000');
});
app.use(express.static(__dirname + '/public/'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/editor', function(req, res){
  res.sendFile(__dirname + '/public/editor.html');
});

//socket.io
io.sockets.on('connection', function(socket){
  //save
  socket.on('save', function(data){
    console.log(data);
  });
});
