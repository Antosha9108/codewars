function squareSum(numbers){
    let squares = numbers.map(num => num*num)
    return squares.reduce((sum, current) => sum + current, 0);
    }