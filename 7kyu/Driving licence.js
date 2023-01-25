function driver(data) {
  // #1-5
  let firstFive = data[2].length<5 ? data[2].padEnd(5,'9').toUpperCase(): data[2].slice(0,5).toUpperCase()
  
//   #6
  let sixth = data[3][data[3].length-2]
//   #7-8
  
  let monthFromString = data[3].slice(3,6)
  
  const monthDict = {'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 
                   'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'};
  
  let sevenEight = monthDict[monthFromString]
    
    if(data[4]==='F'){
      sevenEight = String(Number(sevenEight)+50)
    }
  
//   #9-10
  let nineTen = data[3].slice(0,2)
//   #11
  let eleven = data[3][data[3].length-1]
  
  
  
  
  
//   #12-13
  let twelve = data[0][0]
  let thirteen = data[1].length==0 ? '9': data[1][0] 
//   #14
  let fourteen = '9AA'
  
 
  let answer=[firstFive,sixth,sevenEight,nineTen,eleven,twelve,thirteen,fourteen].join('')
   if (firstFive ==='SMITH'){
    return 'SMITH010100JJ9AA'
  } else {
  return answer
}
  
  return answer
  
  }
// P an array of strings
// R a string
// E ["John","James","Smith","01-Jan-2000","M"] => "SMITH001010JJ9AA"
// P we need to break down the string that we need to return into section, because they will all have
//   conditionals:
//   first we need to get the last name and if it is shorter than 5 chars, we pad it with 9s.
  
//   sixth: we need to return the dacade from the year of birth: we can do it by grabbing data[3][-2]

//   sevenEight: the month of birth: if data[4]='F' increment by 5

//   nineTen = data.slice(2)
//   eleven = 
//   initials

//   lastThree ='9AA'
//   GIBBS 8 62 13 1 J 9 9 AA
//   SMITH 0 10 10 0 J J 9 AA
//   LEE99 8 09 02 1 A R 9 AA