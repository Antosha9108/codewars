function differenceInAges(ages){
ages =ages.sort((a,b)=>(a-b))
  let difference = ages[ages.length-1] -ages[0]
  return[ages[0],ages[ages.length-1],difference]
  
}

