function getMiddle(s){
  let sl = s.length
    let firstHalf =s.slice(0,sl/2)
    let secondHalf =s.slice(sl/2,s.length)
    let char1 = firstHalf.charAt(firstHalf.length-1)
    let char2 = secondHalf.charAt(0)
  
  if (s.length%2==0){
    return [char1,char2].join('')
  } else {
    return char2
  }
}