function divCon(x) {
    let nums = x.filter(el => el === Number(el)).reduce((acc, c) => acc + c, 0)
    let stringNums = x.filter(el => el !== Number(el)).map(el => Number(el)).reduce((acc, c) => acc + c, 0)

    return nums - stringNums


}
// P array of mixed numbers and strings of nums
// R an integer
// E [9, 3, '7', '3']),=> 2) (9-3)=6, 7-3=4  6-4 =2
// P we can filter declare two variables and put integers in one
// and the strings into the other.
// we can reduce the first one right away
// The second we need to map through to turn into integers and then reduce
// Lastly we subtract second var from the first one
