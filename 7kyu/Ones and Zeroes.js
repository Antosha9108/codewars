const binaryArrayToNumber = arr => {
    arr = arr.join('')
    return parseInt(arr,2)
  };
  
  //One liner:
  // const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);