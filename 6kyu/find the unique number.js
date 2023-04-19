function findUniq(arr) {
    let newArr = arr.filter((el, i, array) => array.indexOf(el) == array.lastIndexOf(el))
    return newArr[0]
}
