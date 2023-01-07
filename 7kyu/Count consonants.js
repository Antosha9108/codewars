function consonantCount(str) {
    let consonants = 'qwrtpsdfghjklzxcvbnmQWRTPSDFGHJKLZXCVBNMYy'
    let array = str.split('').filter(element => consonants.includes(element))
    console.log(array)
    return array.length
}

// P string
// R integer
// E aaaa=>0, sos=>2
// P first we need to declare a string that contains all the consonants.
//   then we split the given string and filter it leaving only the consonants.
//       we can't do just vowels because there will be integers and special characters.
//   after that we get the length of the new array