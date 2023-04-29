const helloWorld = () => {
    let myArray = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
    return myArray.map(el => String.fromCharCode(el)).reduce((acc, c) => acc + c)


};


const helloWorld = () => {
    let myArray = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
    return String.fromCharCode(...myArray)
};