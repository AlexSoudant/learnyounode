const http = require('http')
const BufferList = require('bl')

let URL_1 = process.argv[2] 
let URL_2= process.argv[3] 
let URL_3 = process.argv[4] 

let URL_list = [URL_1, URL_2, URL_3]

URL_list.map(URL_called => {
  let bl = new BufferList()
  let phrase = ""

  http.get(URL_called, function (response) {
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
  
      // console.log(nb_characters)
      phrase = bl._bufs.map(buffer => phrase.concat(buffer.toString()))
      console.log(list_characters.join(' '))
    })
  })

})



  


