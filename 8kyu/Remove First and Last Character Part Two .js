function array(str) {
    console.log(str)
    let arr = str.split(',')
    let arr2 = str.split(',').slice(1, -1).filter(el => el != ',').join(' ')
    if (arr.length <= 2) {
        return null
    } else {
        return arr2
    }


}

//2nd solution
function array(string) {
    return string.split(',').slice(1, -1).join(' ') || null
}