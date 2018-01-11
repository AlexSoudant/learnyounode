
var module = require('./program');
let directory_name = process.argv[2]
let file_extention = process.argv[3]
let result = undefined

module(directory_name, file_extention, (error, result) => {
  if (error){
    console.log(error)
  }
  result.map(filtered_elem => console.log(filtered_elem))
})
// module.component(directory_name, file_extention, result)