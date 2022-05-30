// function getGrade (s1, s2, s3) {
//     let score = (s1+s2+s3)/3;
//     let grade;
//     switch (score){
//         case 90 <= score && score <= 100:
//            grade ="A";
//           break;
//         case 80 <= score <= 90:
//           return "B";
//           break;
//         case 70 <= score <= 80:
//           return "C";
//           break;
//         case 60 <= score <= 70:
//           return "D";
//           break;
//         case 0 <= score <= 60:
//           return "F";
//           break;
        
//     }
//   }


function getGrade (s1, s2, s3) {
    let score = (s1+s2+s3)/3;
    if (90 <= score && score <= 100 ){
        return 'A'
    } else if (80 <= score && score < 90 ){
        return 'B'
  } else if (70 <= score && score < 80 ){
        return 'C'
  } else if (60 <= score && score< 70 ){
        return 'D'
  } else if (0 <= score && score< 60 ){
        return 'F'
  }
  
  }