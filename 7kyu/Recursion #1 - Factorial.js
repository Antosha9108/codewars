const factorial = n => {
    if (n == 0) {
        return 1
    } else {
        let arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(i)
        }
        return arr.reduce((acc, c) => acc * c)
    }
};