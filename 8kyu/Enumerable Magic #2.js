function any(arr, fun) {
    // ...
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i]) == true) {
            return true
        }
    }
    return false
}
