function stringy(size) {
  let newString = '';
  for (let i = 0; i < size; i++) {
    newString += '10'
  }
  console.log(newString)
  return newString.slice(0, size)
}