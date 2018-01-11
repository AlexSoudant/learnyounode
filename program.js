

var fs = require('fs')

let path_to_file = process.argv[2]
let result = undefined

// function log_file_content(){
//   console.log(result)
// }

// function read_file(path_to_file, callback){
//   fs.readFile(path_to_file, 'utf8', function reading_done(error, file_content) {
//     result = file_content.split(/\r\n|\r|\n/).length - 1
//     callback()
//   })
// }

// read_file(path_to_file, log_file_content)

result = fs.readFileSync(path_to_file, 'utf8')
result = result.split(/\r\n|\r|\n/).length - 1

console.log(result)