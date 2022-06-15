function whoIsPaying(name){
    if (name.length>2){
      return [name, name.slice(0,2)]
    }else{
      return [name]
    }
  }

  // ternary 
//   let whoIsPaying = name => name.length>2 ? [name, name.slice(0,2)] : [name]