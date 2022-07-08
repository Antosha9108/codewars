function dutyFree(normPrice, discount, hol){
    let saving = normPrice *(discount*0.01)
    return Math.floor(hol/saving)
  }