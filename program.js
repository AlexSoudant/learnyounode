const http = require('http')
const BufferList = require('bl')

let URL_to_collect = process.argv[2] 
let bl = new BufferList()
let phrase = ""

http.get(URL_to_collect, function (response) {
  response.setEncoding('utf8').on('data', function (data) {
    // console.log("data", data)
    bl.append(data)
  })

  // response.pipe(bl(function (err, data) { 
  //   data.toString()
  // }))

  response.on('error', function (err) {
    console.log(err)
  })
  response.on("end", function(err){
    // console.log(bl._bufs.map(buffer => buffer.toString()))
    list_characters = bl._bufs.map(buffer => buffer.toString())

    nb_characters = bl._bufs.reduce((acc, element) => {
      return acc + element.toString().length
    }, 0)

    console.log(nb_characters)
    phrase = bl._bufs.map(buffer => phrase.concat(buffer.toString()))
    console.log(list_characters.join(''))
  })
})


  


