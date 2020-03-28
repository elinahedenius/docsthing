var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
const fs = require('fs');
const IPFS = require('ipfs-mini');

//start an ipfs node
const ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

//upload content to ipfs
//const data = 'this is a cool string';
//ipfs.add(data, (err, hash) => {
//  if(err) throw err;
//  console.log('https://ipfs.infura.io/ipfs/' + hash);
//})

//start the server
http.listen(2525, function () {
  console.log('server stared on port 2525');
})

app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/editor', function(req, res){
  res.sendFile(__dirname + '/public/editor.html');
});


//socket.io
io.sockets.on('connection', function(socket){

  //save document
  socket.on('save', (data) => {
    console.log(data);
    ipfs.add(data, (err, hash) => {
      if(err) throw err;
      console.log('https://ipfs.infura.io/ipfs/' + hash);
    });
  });
});
