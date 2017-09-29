module.exports = class LinkedList {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }

  getLength() {
    return this.next ? 1 + this.next.getLength() : 1
  }
}
