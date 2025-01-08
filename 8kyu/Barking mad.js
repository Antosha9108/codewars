function Dog(breed) {
    this.breed = breed;
    this.bark = function () {
        return "Woof"
    }
}

var snoopy = new Dog("Beagle");

var scoobydoo = new Dog("Great Dane");


