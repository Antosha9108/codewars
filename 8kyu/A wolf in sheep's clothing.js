function warnTheSheep(queue) {
    let wolfIndex = queue.indexOf('wolf')
    let reversedWolfIndex = queue.reverse().indexOf('wolf')
    if (wolfIndex == queue.length-1){
      return "Pls go away and stop eating my sheep"
    } else {
      return `Oi! Sheep number ${reversedWolfIndex}! You are about to be eaten by a wolf!`
    }
  
  }
  // P an array
  // R a string
  // E ["sheep", "sheep", "sheep", "wolf", "sheep"] =>
  //   "Oi! Sheep number 1! You are about to be eaten by a wolf!"
  // P first we need to find an index of a string 'wolf'
  //   if the index is -1 return string "Pls go away and stop eating my sheep"
  //   if it is not we need to reverse a string and find an
  //   index if the wolf again and return that -1 in the 
  //   string literal