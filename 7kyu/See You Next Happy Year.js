function nextHappyYear(year) {
    let newYear = year + 1
    let arr = newYear.toString().split('')
    if (arr.join('') === Array.from(new Set(arr)).join('')) return newYear
    else return nextHappyYear(newYear)
}