module.exports = class LinkedList {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }

  getLength() {
    return this.next ? 1 + this.next.getLength() : 1
  }

  getSequentialValues(values = []) {
    return this.next ?
      this.next.getSequentialValues([...values, this.value]) :
      [...values, this.value]
  }
}
