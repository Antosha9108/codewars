function positiveSum(arr) {
  let newArr = arr.filter(item => item>0) 
    return newArr.reduce((acc,num)=>acc+num,0)
  }