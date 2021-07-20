function setOptions(num) {
  function setABS(num) {
    console.log(`ABS: ${num}`);
  }
  function setTraction(num) {
    console.log(`Traction Control: ${num}`);
  }
  function setStability(num) {
    console.log(`Stability Control: ${num}`);
  }

  return function () {
    setABS(num);
    setTraction(num);
    setStability(num);
  };
}

const Beginner = setOptions(5);
const GoodDriver = setOptions(3);
const Maniac = setOptions(1);

Beginner();
GoodDriver();
Maniac();

/**
 *  class implementation
 *
 */

class SetOptions {
  constructor(num) {
    this.num = num;
  }

  #setABS() {
    console.log(`ABS: ${this.num}`);
  }
  #setTraction() {
    console.log(`Traction Control: ${this.num}`);
  }
  #setStability() {
    console.log(`Stability Control: ${this.num}`);
  }

  start() {
    this.#setABS();
    this.#setTraction();
    this.#setStability();
  }
}

// const Beginner = new SetOptions(5);
// const GoodDriver = new SetOptions(3);
// const Maniac = new SetOptions(1);

// Beginner.start();
// GoodDriver.start();
// Maniac.start();
