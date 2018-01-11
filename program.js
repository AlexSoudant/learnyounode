const http = require('http')
const bl = require('bl')

let results = []
let URL_list = [process.argv[2] , process.argv[3] , process.argv[4] ]

let count = 0

URL_list.forEach((URL_called, index) => {
  //results.push(get_http_response(URL_called))
  get_http_response(URL_called, (error, result) => {
    if (error){
      console.log(error)
    }
    results[index] = result
    count++
    // console.log(URL_called, index, result)
    if (count === URL_list.length){
      results.forEach( elem => console.log(elem))
    }
  })
})

// console.log(results)

// console.log(results)
// results.map(result => console.log(result))

function get_http_response(URL_called, callback){

  http.get(URL_called, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        callback(err)
      }
      callback(null, data.toString())
    }))
  })
}
