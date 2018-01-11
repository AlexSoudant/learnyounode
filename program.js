

var fs = require('fs')


module.exports = function promise_read_dir(path_to_file, file_extention, callback){
  
  fs.readdir(path_to_file,  (error, list) => {

    if (error){
      return callback(error)
    }
    let filtered_result = list.filter( file => 
      file.split('.')[1] == file_extention
    )
    return callback(null, filtered_result)
  })
}

  


