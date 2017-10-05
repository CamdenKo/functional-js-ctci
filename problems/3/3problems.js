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

const recursivelyCreateArr = (values, arr = []) =>
  values.length ?
    recursivelyCreateArr(values.slice(1), [...arr, values[0]]) :
    arr

const lastIndex = arr =>
  arr[arr.length - 1]

const convertValuesToSeveralArrs = (arrSize, values) =>
  values.reduce((accum, curValue) =>
    lastIndex(accum).length >= arrSize ?
      [...accum, [curValue]] :
      [...accum.slice(0, accum.length - 1), [...lastIndex(accum), curValue]],
  [[]])

const flatten2Arr = arr =>
  arr.reduce((accum, curValue) => [...accum, ...curValue], [])


class PlateStack {
  constructor(stackSize, ...values) {
    this.stackSize = stackSize
    this.stacks = convertValuesToSeveralArrs(stackSize, values)
  }

  get numStacks() {
    return this.stacks.length
  }

  push(value) {
    return new PlateStack(this.stackSize, ...flatten2Arr(this.stacks), value)
  }

  pushMany(...values) {
    return new PlateStack(this.stackSize, ...flatten2Arr(this.stacks), ...values)
  }

  peek() {
    return lastIndex(lastIndex(this.stacks))
  }

  pop() {
    const flat = flatten2Arr(this.stacks)
    return new PlateStack(this.stackSize, ...flat.slice(0, flat.length - 1))
  }
}

module.exports = {
  MinStack,
  Q,
  PlateStack,
  convertValuesToSeveralArrs,
}
