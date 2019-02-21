// create a new ES6 class and export it
export class Thing {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`hello ${this.name}`)
  }
}