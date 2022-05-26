function find_average(array) {
    //check if the array is empty
    if (array.length ==0){
      return 0
    } else{
        //do the math: reduce all elements from the array and divide by the amount of elements
    let result = array.reduce((sum, current) => sum + current, 0)/array.length;
    
     return result;
      }
    }