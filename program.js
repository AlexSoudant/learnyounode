const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const pathFile = process.argv[3]

var server = http.createServer(function (req, res) {
  // socket handling logic
  console.log('file', pathFile)
  res.writeHead(200, {'content-type': 'text/plain'})
  fs.createReadStream(pathFile).pipe(res)
})

server.listen(parseInt(port))




