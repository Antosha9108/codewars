function Hero (name) {
  this.name = name,
  this.position = '00',
  this.health = 100,
  this.damage = 5,
  this.experience = 0;
  
  if (this.name == undefined) {
    this.name = "Hero"
  }
}
