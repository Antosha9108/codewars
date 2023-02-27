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
  