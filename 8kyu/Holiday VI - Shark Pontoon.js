const { stringify } = require("querystring")

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin === true){
    sharkSpeed = sharkSpeed/2
  }
let sharkTime = sharkDistance / sharkSpeed
let youTime = pontoonDistance / youSpeed
console.log(sharkTime)
  if (youTime < sharkTime){
    return 'Alive!'
  } else {
    return "Shark Bait!"
  }
}

// P four integers and Bool
// R string
// E 12, 50, 4, 8, true), "Alive!"
//   24, 0, 4, 8, true), "Shark Bait!
// P first we need to determine if dolphin is true and if sharkSpeed will be affected.
//   we can use a conditional for it
//   then we need to determine sharkTime and youTime
//   then we compare those two variables and output the according string.