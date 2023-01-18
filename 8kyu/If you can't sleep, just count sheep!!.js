var countSheep = function (num) {
  let result = "";
  if (num == 0) {
    return ''
  } else {
    for (let i = 1; i <= num; i++) {
      result += i + ' sheep...'
    }
    return result
  }
}

var countSheep = function (num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }
  return arr.map(element => `${element} sheep...`).join('')
}