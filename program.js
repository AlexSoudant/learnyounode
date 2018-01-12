const http = require('http')
const fs = require('fs')
const map = require('through2-map')

const port = process.argv[2]
// const pathFile = process.argv[3]


var server = http.createServer(function (req, res) {

  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk){
    return chunk.toString().toUpperCase()
  })).pipe(res)

})

server.listen(Number(port))




