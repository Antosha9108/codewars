
const catchSignChange = arr => {
    let count = 0;
    if (arr.length == 0) {
        return 0
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0 && arr[i + 1] < 0) {
                count++
            } else if (arr[i] < 0 && arr[i + 1] >= 0) {
                count++
            }
        }
    }
    return count
};



