function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
  
  //P: integers for all three params.
  //R: if too much clothes or not enough clothes we are returning the string. else we return the integer.integer
     //   should be rounded to 2 decimals
  //E: water is 10 load is 11 clothing is 20 => return 23.58
  //P: First we use formula for needed water 
         let neededWater = water *1.1 **(clothes - load)
    // Then we need to eliminate the cases with too much clothes or not enough clothes
        
        if (clothes > load*2){
          return 'Too much clothes'   
        } else if (clothes < load){
          return 'Not enough clothes'
        } else {
          //toFixed will return the string So we need to wrap it up in the Number
          return Number(neededWater.toFixed(2))
        }
        
  
  
  
  
  }
  
  
  