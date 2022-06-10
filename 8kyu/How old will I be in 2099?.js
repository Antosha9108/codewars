function  calculateAge(a,b) {
    if (b-a==1){
      return "You are 1 year old."
    } else if (a-b==1){
      return "You will be born in 1 year."
    }
    else if (a===b){
      return "You were born this very year!"
    } else if (b>a){
      return `You are ${b-a} years old.`
    } else if (b<a){
      return `You will be born in ${a-b} years.`
    } 
  }  