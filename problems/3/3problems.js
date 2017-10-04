const minimum = arr =>
  arr.length ?
    arr.reduce((accum, curValue) => accum > curValue ? curValue : accum, Infinity) :
    null

class MinStack {
  constructor(...values) {
    this.min = minimum(values)
    this.values = values
  }

  get top() {
    return this.values[this.values.length - 1]
  }

  push(value) {
    return new MinStack(...this.values, value)
  }

  pop() {
    return this.values.length ?
      new MinStack(...this.values.slice(0, this.values.length - 1)) :
      null
  }
}

class Q {
  constructor(...values) {
    this.values = values
  }

  get front() {
    return this.values[0]
  }

  enqueue(value) {
    return new Q(...this.values, value)
  }

  dequeue() {
    return this.values.length ?
      new Q(...this.values.slice(1)) :
      null
  }
}

module.exports = {
  MinStack,
  Q,
}
