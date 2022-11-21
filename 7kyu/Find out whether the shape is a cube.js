var cubeChecker = function (volume, side) {
    if (side <= 0) {
        return false
    } else {
        return volume === side * side * side;
    }
}; 