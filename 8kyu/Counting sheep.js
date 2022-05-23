function countSheeps(arrayOfSheep) {
    //get all the true values from the arrayOfSheep
    let newArr = arrayOfSheep.filter(item => item == true).length
    return newArr

  }