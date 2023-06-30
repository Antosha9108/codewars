
function makeValley(arr) {
    arr = arr.sort((a, b) => a - b);
    var res = []
    var n = arr.length % 2 == 0 ? 1 : 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == n) res.unshift(arr[i])
        else res.push(arr[i])
    }
    return res
}