function smallEnough(a, limit){
  let filteredArr = a.filter(item => item<=limit)
  
  if (a.length === filteredArr.length){ 
    return true
  } else {
    return false
  }

}