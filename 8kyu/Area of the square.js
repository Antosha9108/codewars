function squareArea(A){
    let area = A*A /Math.PI
    let radius = Math.sqrt(area/Math.PI)
    return Math.round((radius*radius)*4*100)/100
  }
  
  // // P integer
  // // R integer
  // // E
  // // P first we need to find the area of the circle.
  //       from that number we can find the radius(which would be one side of the square)
  //       and then return the radius squared(and round it to 2 decimals )