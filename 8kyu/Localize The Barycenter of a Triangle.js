function barTriang(p1, p2, p3){
  //your code here
  let x = (p1[0]+p2[0]+p3[0])/3
  let y = (p1[1]+p2[1]+p3[1])/3
  return [+x.toFixed(4), +y.toFixed(4)] 
}

// P 3 array with 2 elements each
// R one array with two coordinates
// E [4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]
// P first we need to declare two variables x and y and put the coordinates in them
//   we can sum up first elements from each parameter and divide it by 3 for x. and every second parameter and divide it by 3 for y
//   after that we can return them into an array
  
