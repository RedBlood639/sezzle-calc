var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
})


http.listen(3001, function(){
  console.log('listening on *:3001');
});