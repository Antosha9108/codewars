function fakeBin(arr) {
     let newArr = arr.split('').map(binary).join('')
     function binary(value) {
          if (value < 5) {
               return value = 0
          } else {
               return value = 1
          }
     }
     return newArr
}


function fakeBin(x) {
     let bin = x.split('').map(num => Number(num))
     return bin.map(num => num < 5 ? 0 : 1).join('')

}