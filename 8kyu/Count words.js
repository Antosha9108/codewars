function countWords(str) {
    console.log(str)
    let breakSpace = String.fromCharCode(65279)
    return str.replaceAll(breakSpace, ' ').split(' ').filter(word => word != '').length
}