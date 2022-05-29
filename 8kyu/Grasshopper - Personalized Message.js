function greet (name, owner) {
    if (name == owner) {
      return `Hello boss`
    } else {
      return `Hello guest`
    }
    // Add code here
  }

  // second solution
  function greet (name, owner) {
    return name ===owner? 'Hello boss' : 'Hello guest'
  }