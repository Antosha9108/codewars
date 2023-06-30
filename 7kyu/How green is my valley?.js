
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


function makeValley(arr) {
    var leftWing = []
    var rightWing = []
    arr.sort((a, b) => b - a)
        .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))

    return [...leftWing, ...rightWing]
}