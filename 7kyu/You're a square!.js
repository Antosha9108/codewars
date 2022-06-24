var isSquare = function(n){
    let rootNum = Math.floor(Math.sqrt(n))
    let num = rootNum *rootNum
    if (n === num){
      return true 
    } else {
      return false
    }
    }