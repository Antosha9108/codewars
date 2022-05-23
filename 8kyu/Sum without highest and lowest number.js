function sumArray(array) {
    if (!array){
      return 0
    } else{
      function compareNumeric(a, b) {
          if (a > b) return 1;
          if (a == b) return 0;
          if (a < b) return -1;
        }
  let newArr = array.sort(compareNumeric).slice(1,-1)
  return newArr.reduce((sum, current) => sum + current, 0)
  }
    }