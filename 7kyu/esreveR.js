reverse = function(array) {
  let newArr = []
  for (let i=array.length-1 ;i>=0;i--){
    newArr.push(array[i])
  }
  return newArr
}