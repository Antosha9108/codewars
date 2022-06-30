function peopleWithAgeDrink(old) {
    switch (true){
      case old<14:
      return "drink toddy"
      break;
        case old<18:
      return "drink coke"
      break;
        case old<21:
      return "drink beer"
      break;
        case old>=21:
      return "drink whisky"
      break;
        }
  };