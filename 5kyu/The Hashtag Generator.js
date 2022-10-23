function generateHashtag (str) {
    let capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
    let array = str.split(' ').map((word)=> capitalize(word)).join('')
    let hash = '#';
    console.log(array)
    if (array === ''){
      return false
    } else if (array.length >=140){
      return false
    } else {
      return '#' + array
  //     return array
    }
    
  }


// P string
// R bool or the string with hashtag
// E ''=> false ;
//   ("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
// Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
// P first we need to do the conditional to return false if the string is empty
//   or if it is longer that 140 characters

//     if both of those dont check out we can work on the string


//     first we need to split it in into the array with .split method()
//     now we need to capitalize the elements.
//     we can map through the array and return element[0].toUpperCase()+
//       element.split(1,element.length-1)

//     after that we can join the array back into the string with '' glue.
//     and concat it together with '#'