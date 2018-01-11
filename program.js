

var fs = require('fs')


// function filter_files(){
//   filtered_result = result.filter( file => 
//     file.split('.')[1] == file_extention
//   )

//   return filtered_result

// }

module.exports = function promise_read_dir(path_to_file, file_extention, callback){
  
  fs.readdir(path_to_file, ( (error, list) => {

    if (error){
      console.log(error)
    }
    let filtered_result = list.filter( file => 
      file.split('.')[1] == file_extention
    )
    return callback(null, filtered_result)
  }))
}

  


