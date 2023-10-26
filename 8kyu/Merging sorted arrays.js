function mergeArrays(a, b) {
    let newArr = a.concat(b)

    return newArr.filter((a, b) => newArr.indexOf(a) === b).sort((a, b) => a - b)
}
