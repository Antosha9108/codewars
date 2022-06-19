var capitals = function (word) {
// 	let arr = word.split('').map((letter)=> word.indexOf(letter.toUpperCase()))
//   return arr
  
  let arr=[];
  for(let i=0;i<word.length;i++){
if(word.charAt(i)==word.charAt(i).toUpperCase()){
 arr.push(i)
  }

}

return arr
};





