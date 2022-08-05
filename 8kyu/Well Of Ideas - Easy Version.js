function well(x){
    let sum =0;
 for (let i= 0; i < x.length; i++){
   if (x[i] ==='good'){
     sum+=1
   } 
 }
   if (sum > 2) {
 return "I smell a series!"
 } else if (sum >= 1) {
 return "Publish!"
 }else if (sum==0) {
 return "Fail!"}
 // P array of strings
 // R a string
 // E ['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!'
 // P first we need to find out how many good ideas are in the array.
 //   we can do it by looping through it and adding plus one to sum for every good idea.
 //   then we can do conditional for the return string
 }