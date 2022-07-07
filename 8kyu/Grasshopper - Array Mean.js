var findAverage = function (nums) {
    return nums.reduce((acc,c)=>acc+c,0)/nums.length
  }