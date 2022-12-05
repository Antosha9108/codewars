function arrayDiff(a, b) {
  
  return a.filter((item) => !b.includes(item))
 
      }

// P two arrays
// R array
// E [1,2], [1] == [2] [1,2,3], [1,2]) == [3]
// P we can declare a new array and filter through the first two 