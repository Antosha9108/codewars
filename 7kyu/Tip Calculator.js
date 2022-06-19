function calculateTip(amount, rating) {
  switch(rating.toLowerCase()) {
      case 'terrible'.toLowerCase():
      return amount*0
      break;
      case 'poor'.toLowerCase():
      return Math.ceil(amount*0.05)
      break;
      case 'good'.toLowerCase():
      return Math.ceil(amount*0.10)
      break;
      case 'great'.toLowerCase():
      return  Math.ceil(amount*0.15)
      break;
      case 'Excellent'.toLowerCase():
      return Math.ceil(amount*0.20)
      break;
      default:
      return "Rating not recognised"
  }
}