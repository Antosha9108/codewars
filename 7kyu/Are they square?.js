var isSquare = function(arr){
  return arr.length > 0 ? arr.every(element => Math.sqrt(element) % 1 === 0) : undefined;
  
}