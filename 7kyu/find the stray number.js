function stray(numbers) {
    return numbers.filter((num, index, array) => array.indexOf(num) == array.lastIndexOf(num))[0]
};

// P array
// R integer
// E [1,1,2]=>2
// P we need to filter the array with all three parameters(num,index,array)
//   we filter the array with indexOf ==last indexOf
//   (if they match it means there's only one if these elements in 
//   the array)
// lastly we get the integer by index []