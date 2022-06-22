function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    // first get an average point by reducing the whole array 
    let average = classPoints.reduce((a,b) =>(a+b)) /classPoints.length;
    
    if (yourPoints > average) {
      return true
    } else {
      return false
    }
    //then compare it to your points and return a bool
    
  }
  
  