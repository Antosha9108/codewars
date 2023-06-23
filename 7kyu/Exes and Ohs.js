function XO(str) {
    console.log(str)
    let count1 = 0;
    let count2 = 0;
    let array = str.toLowerCase().split('')
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === 'x') {
            count1++
        } else if (array[i] === 'o') {
            count2++
        }
    }
    return count1 == count2
}


function XO(str) {
    let array = str.toLowerCase().split('')

    let x = array.filter(el => el == 'x')
    let o = array.filter(el => el == 'o')

    return x.length === o.length


}


