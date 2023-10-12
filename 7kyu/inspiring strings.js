function longestWord(stringOfWords) {
    let arr = stringOfWords.split(' ').sort((a, b) => a.length - b.length)
    return arr[arr.length - 1]
}
