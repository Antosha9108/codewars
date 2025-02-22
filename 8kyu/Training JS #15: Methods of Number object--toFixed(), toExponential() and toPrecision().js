function howManySmaller(arr,n){
    return arr.map(el => el.toFixed(2)).filter(el=>el < n).length
    
  }