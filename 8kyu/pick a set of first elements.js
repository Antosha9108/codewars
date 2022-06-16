function first(arr, n) {
    if (n===0){
      return []
    } else if (n>1){
      return arr.slice(0,n)
    }else {
      return arr.slice(0,1)
    }
  }