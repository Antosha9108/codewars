function findShort(s) {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}

  // first we need to split the string into an array with the space.
  // then we sort it in the ascending order.
  // then we get the length of the first element in the array