function stantonMeasure(array){

    let n = 0;
    
    array.forEach((element) => {
      if (element ==1){
        n++;
        }
    });
      let n2 =0;
      array.forEach((element) => {
      if (element ==n){
        n2++;
        }
    
    })
      return n2
      }
      
    
    // P an array of integers
    // R an integer
    // E [1, 4, 3, 2, 1, 2, 3, 2] =>3
    // P first we can filter through an array and find the amount of occurances of 1 in it and assign
    //   it to the variable n
    //   then we iterate through it again and see how many occurances of n are in the array
    
    /*
      function:- stantonMeasure
      input:- integer array
      output:- stanton measure of the array
    */