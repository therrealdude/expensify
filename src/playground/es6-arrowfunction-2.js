const user = {
  name: 'Dan',
  cities: ['Chicago', 'New York', 'Beijing'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      return this.name + ' has lived in ' + city + '!';
    });
    return cityMessages;
  }
}

console.log(user.printPlacesLived());

const multiplier = {
  // numbers array
  // multiply by - single numbers
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
