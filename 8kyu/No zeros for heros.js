function noBoringZeros(n) {
    let arr = Array.from(String(n))
    for (let i = 0; i <= arr.length; i++) {
        if (arr[arr.length - 1] === '0') {
            arr.pop()
        }
    }
    return Number(arr.join(''))
}