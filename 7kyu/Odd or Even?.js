function oddOrEven(array) {
    if (array ==0){
      return'even'
    }
     let newArr = array.reduce((acc,c) => acc+c)
     if (newArr%2==0){
       return 'even'
     } else {
       return 'odd'
     }
  }