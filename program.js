

var fs = require('fs')

let directory_name = process.argv[2]
let file_extention = process.argv[3]
let result = undefined


function filter_files(){
  //console.log(result)
  filtered_result = result.filter( file => 
    file.split('.')[1] == file_extention
  )
  // console.log(filtered_result[0])
  // console.log(filtered_result[1])
  // console.log(filtered_result[2])
  filtered_result.map(filtered_elem => console.log(filtered_elem))

}

function read_dir(path_to_file, callback){
  
  fs.readdir(path_to_file, ( (error, list) => {
    result = list
    callback()
  }))
}

read_dir(directory_name, filter_files)
