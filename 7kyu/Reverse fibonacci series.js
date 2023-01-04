function reverseFibo(n) {

    console.log(n)
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    return arr.reverse().join('')
}