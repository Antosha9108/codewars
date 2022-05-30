function rentalCarCost(d) {
    sum = d*40
    if (d>=7){
      return sum -=50
    }else if(d>=3){
     return sum -=20
    } else{
      return sum
    }
  }