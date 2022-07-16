const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
  let checkA = val+2;
  let checkB = func(val)
  
  
  console.log();
  if (checkA === checkB) {
    return func
  } else {
    return ('inconsistent results')
  }
}

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => number< 250 )