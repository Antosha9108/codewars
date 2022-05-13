const arrCheck = value =>{
    const isItAnArray = (currentValue) => Array.isArray(currentValue);
    return value.every(isItAnArray)
  }