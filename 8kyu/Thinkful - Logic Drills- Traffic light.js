function updateLight(current) {
    let result;
   if (current ==='green'){
     result = 'yellow'
   } else if (current ==='yellow'){
     result = 'red'
   } else if (current === 'red'){
     result = 'green'
   }
    
    return result
  
  }