class Vehicle {
  setABS(option) {
    console.log(`ABS: ${option}`);
  }
  setTraction(option) {
    console.log(`Traction Control: ${option}`);
  }
  setStability(option) {
    console.log(`Stability Control: ${option}`);
  }
}

class Car extends Vehicle {
  constructor(options) {
    super();
    this.options = options;
  }

  #init(option) {
    this.setABS(option);
    this.setTraction(option);
    this.setStability(option);
  }

  beginner() {
    this.#init(this.options.beginner);
  }

  goodDriver() {
    this.#init(this.options.goodDriver);
  }

  maniac() {
    this.#init(this.options.maniac);
  }
}

const gameOptions = {
  beginner: 5,
  goodDriver: 3,
  maniac: 1,
};

const car = new Car(gameOptions);

car.beginner();
// car.goodDriver();
// car.maniac();
