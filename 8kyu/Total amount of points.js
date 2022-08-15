function points(games) {
    // P an array of string
    // R an integer having all the score together
    // E ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'] =>30
    // P first we declare an empty array where we would add the point.
       let totalPoints =[]
    //       second we need to determine how to get two values (x/y) from every element of the array.
    //       then we put in conditional logic to see if x >y ,x<y, x==y output the point accordingly 
    //       and push it to the totalPoints array.
          
        for (let i=0; i<games.length;i++){   
            if (games[i][0] >games[i][2]){
            totalPoints.push(3)
            } else if(games[i][0] <games[i][2]){
            totalPoints.push (0)
            } else if (games[i][0] == games[i][2]){
            totalPoints.push (1)
            }
      
  //   we return the reduced array to see the total number
    }
    return totalPoints.reduce((a,b) => a+b)
}





// function points(games) {
//     let total = 0;
//     games.map(game => {
//       if (game[0] === game[2]) {
//         total += 1;
//       } else if (game[0] > game[2]) {
//         total += 3;
//       }
//     });
//     return total;
//   }