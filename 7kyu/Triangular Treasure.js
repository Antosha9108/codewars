// Return the nth triangular number
function triangular( n ) {
    //   let arr =[];
      let sum =0;
    //   we get an integer
    //   and return an integer
    //   2=>3 ; 1+2=3
    //   first we can declare an empty array.
    //   then we can set up a for loop and push items to it but +1
    //   after that is done we can reduce the array and get the final number
      
      
    //   optimized solution is to assign a var with 0 and just += the numbers
    //   to it.
    //   it computates much faster
      for (let i=0;i<n;i++){
    //     arr.push(i+1)
        sum+=(i+1)
      }
    //   return arr.reduce((acc,c)=>acc+c,0)
      return sum
    }