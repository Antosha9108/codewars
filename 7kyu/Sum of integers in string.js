function sumOfIntegersInString(s) {
    console.log(s)
    let nums = s.match(/\d+/g)
    return nums == null ? 0 : nums.map(num => Number(num)).reduce((acc, c) => acc + c)
}


// first we pull out the digits out of the string with .match(/\d+/g) regex. (d is for digit and g is a global flag)
// if nums ==null we return zero, cause we cannot map through nums. otherwise we convert numbers string into integers and reduce the array