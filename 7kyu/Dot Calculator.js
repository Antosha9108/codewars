function dotCalculator(equation) {
    let num = 0
    let [firstHalf, operator, secondHalf] = equation.split(' ')

    if (operator === '+') {
        num = firstHalf.length + secondHalf.length
    } else if (operator === '-') {
        num = firstHalf.length - secondHalf.length
    } else if (operator === '*') {
        num = firstHalf.length * secondHalf.length
    } else if (operator === '//') {
        num = firstHalf.length / secondHalf.length
    }




    return '.'.repeat(num)
}
// P a string
// R a modified string
// E "..... - ..."   => ".."
// P
//   first we need to get two strings for each side of the equation snd an operator
//       we can do that by desctructuring the array  
// let [firstHalf,operator,secondHalf]=equation.split(' ')
// after that we need to set up a conditional logic
// lastly we repeat '.' string num times
