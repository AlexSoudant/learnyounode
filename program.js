

const values = process.argv.slice(2)

const result = values.reduce((acc, element) => {

  return acc + parseInt(element)


}, 0)

console.log(result)


