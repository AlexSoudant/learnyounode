

let sum = 0

process.argv.slice(2).forEach((element, index) => {
  //console.log(index)
  
  //if (index > 1){
    sum += Number(element)
  //}

})

console.log(sum)


