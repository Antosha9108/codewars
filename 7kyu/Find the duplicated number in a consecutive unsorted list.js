function findDup(arr) {

    return arr.filter((a, b) => arr.indexOf(a) !== b)[0];
}