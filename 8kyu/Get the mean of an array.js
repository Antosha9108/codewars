function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((sum, current) => sum + current, 0)/marks.length);
  }