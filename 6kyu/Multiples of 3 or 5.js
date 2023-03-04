function solution(number) {
    let array = []
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            array.push(i)
            //         console.log(array)
        }

    }
    return array.reduce((acc, c) => acc + c, 0)
}

//  integer
//  integer
//  10 => 3,5,6,9 (23)

// we can loop through that number and get all numbers up to n.
// conditionals if i %3 or %5 ==0 we push i into array. 
// return the array.

// Reduce that array.
// let arr =[]


// condional for the negative number. (return 0). 
