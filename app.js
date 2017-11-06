var express = require('express'); //make express available
var app = express(); //invoke express
var server = require('http').Server( app ) // start the express server instance
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets
var jsonfile = require('jsonfile')
//makes the app listen for requests on port 3000
var randomColor = require('randomcolor'); // import the script

app.use(express.static('public'))

io.on('connection', function(socket){
  console.log(socket.id);
//this is our server code thats being exicuted by node.js

//getting a message from each clinet
socket.on('textWasEntered', function(textData){
  //got it, now forward it on to everyone thats connected.
    io.emit('rerouteTextEntry', textData)
  })
})

var port = process.env.PORT || 3000
server.listen(port, function(){
  console.log("app listening on port" + port + "!")
})
