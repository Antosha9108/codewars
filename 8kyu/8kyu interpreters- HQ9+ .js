function HQ9(code) {
  //finish me
  if (code == 'H') {
    return 'Hello World!'
  } else if (code == 'Q') {
    return code
  } else if (code == '9') {
    let str = ''
    for (let i = 99; i > 2; i--) {
      str += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.\n`
    }
    console.log(str)
    return str + '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
  }
}
// P string
// R string
// E h => Hello world
// P we can do the conditional if else statements to see what is passed
// to the function.

// for the input of 9 we will need to do a reverse for loop
// we can declare an empty string variable str and pass the looped string
// into it.

// for the last few sentences figure out the number to go down and change
// the loop to it. add the string in the end for the last 2 sentences
// 1 and 0.