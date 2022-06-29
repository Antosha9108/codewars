function isPalindrome(line) {
    line = String(line)
    let reverseLine = (line.split("").reverse().join(""))
    if (line === reverseLine) {
      return true
    } else {
      return false
    }
  }