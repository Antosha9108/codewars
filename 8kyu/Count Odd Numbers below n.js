function oddCount(n){
    return Math.floor(n/2)
  }
  // P an integer
  // R an iteger
  // E 7=>3 (1,3,5) 15 => 7 (1,3,5,7,9,11,13)
  // P first we can declare a variable sum with zero value to add to it
  //   then we can make a for loop with i and if i%2!=0 we add +1 to the sum
  //   then we return the sum
  //      SO THIS APPROACH TIMES OUT BECAUSE OF HANDLING ALOT OF NUMBERS
       
  //      we can do n/2 (cause every second number in n is odd) and then Math.floor it