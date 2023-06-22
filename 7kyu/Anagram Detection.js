// write the function isAnagram
var isAnagram = function (test, original) {
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
};
