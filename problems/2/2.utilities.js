export default class LinkedList {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }

  length = () =>
    this.next ? 1 + this.next.length() : 1
}
