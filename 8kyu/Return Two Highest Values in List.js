function twoHighest(arr) {
    return arr.sort((a,b)=>b-a).filter((a, b) => arr.indexOf(a) === b).slice(0,2)
  }