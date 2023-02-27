function missingWord(nums, str) {
  let newStr = str.replaceAll(' ','')
  let answerArray =[]
  nums.sort((a,b)=>a-b)
  answerArray.push(newStr.charAt(nums[0]))
  answerArray.push(newStr.charAt(nums[1]))
  answerArray.push(newStr.charAt(nums[2]))
  
  return Math.max(...nums) > newStr.length ? "No mission today" : answerArray.join('').toLowerCase()
  }
// P array of numbers and a string
// R a string
// E  "I love you"=> "ivy"
// P first we need to remove the spaces from the given string.
//   after that we can loop through the string with the index of given number and add it to
//   the empty array that we need to declare as well
//   join the array into the string
  
//   we also need to add the conditional that if any of nums are longer than str.length return
//   no mission today
  

function missingWord(nums, str) {
    let newStr = str.replaceAll(' ','')
     nums.sort((a,b)=>a-b)
     
     let answer =nums.map(el =>newStr[el]).join('').toLowerCase()
     return Math.max(...nums) > newStr.length ? "No mission today" : answer
    
    }
   
   
   
   // first we remove the spaces
   //   sort the numbers
   //   we map through the numbers array and return the elements from the newStr at [el] index
   //   then lower case it
   
   //   finally get ternary for the answer length