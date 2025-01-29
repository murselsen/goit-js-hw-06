console.log('~~~~~~~~~ Task 3: ~~~~~~~~~');

class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value + str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log('Main: ', builder.getValue());

builder.padStart('^');
console.log('padStart: ', builder.getValue());

builder.padEnd('^');
console.log('padEnd: ', builder.getValue());

builder.padBoth('=');
console.log('padBoth: ', builder.getValue());
