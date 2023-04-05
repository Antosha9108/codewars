function consecutive(arr) {
    return arr.length >= 1 ? Math.max(...arr) - Math.min(...arr) + 1 - arr.length : 0
}
