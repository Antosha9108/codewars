function repeats(arr){
return arr.filter((a)=> arr.indexOf(a) === arr.lastIndexOf(a)).reduce((acc,c)=>acc+c)
};
// P array
// R we return an integer sum of unique nums
// E 4,5,7,5,4,8 => 15 //(7+8)
// P first we need to remove duplicates.
//     we can do that by comapring index and last index of the element.
//     after that we just need to reduce itgit s