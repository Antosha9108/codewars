function index(array, n){
    if (n< array.length){
      return array[n]**n
    }else {
      return -1
    }
  }
  
  // ternary solution
  let index= (array, n) => n<array.length ? array[n]**n : -1
  