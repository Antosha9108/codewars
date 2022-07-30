// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// return masked string
// return masked string
function maskify(cc) {
    let lastFour = cc.slice(-4)
    let firstCodedHalf = cc.slice(0,-4)
    let str='#'
    let maskedString = str.repeat(firstCodedHalf.length)+lastFour
if (cc.length<= 4){
    return cc
}else{
    return maskedString
}

}

//P: we are given a string
//R: we need to get a string with only last 4 chars from the original string
//E: '4556364607935616' => '############5616'
//P:  first we need to determine if the string is longer that 4 characters and if it's not just return the string. 
//      if it is longer we need to split the string in 2 parts: everything before the last 4 and the last for. 
// we can multiply # by the length of the first string and then concatenate it with the last 4 characters. (or join them up if we will use arrays)