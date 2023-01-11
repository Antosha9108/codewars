function insertDash(num) {
    var result = []
    num = num.toString().split('').map(Number)
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
            result.push(num[i])
            result.push('-')
        }
        else {
            result.push(num[i])
        }
    }
    if (result[result.length - 1] == '-') result.pop()
    return result.join("")
}
// P a number
// R modified string of numbers with dashes between every two odd nums
// E (454793),'4547-9-3')
// P first we need to find consecutive odd numbers. we can do it with a for loop and modulus %2==0
//     on two consecutive numbers()
//     if condition is true we push num[i] and we push('-') to the array
//     else we push num[i]

//     lastly we need to get rid of the last dash with .pop() method