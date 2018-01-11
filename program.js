const net = require('net')
const strftime = require('strftime')

const port = process.argv[2]

var server = net.createServer(function (socket) {
  // socket handling logic
  socket.end(strftime( "%F %R", new Date())+"\n" )
})

server.listen(port)




