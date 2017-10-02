const LinkedList = require('./2.utilities')

const createSingleNode = (arrOfVal) => {
  if (!arrOfVal.length) return null
  return new LinkedList(arrOfVal[0], createSingleNode(arrOfVal.slice(1)))
}

const removeDups = (head, seenValues = new Set(), values = []) => {
  if (!head) {
    return createSingleNode(values)
  }
  if (!seenValues.has(head.value)) {
    seenValues.add(head.value)
    values.push(head.value)
  }
  return removeDups(head.next, seenValues, values)
}

const kthToLast = (list, k) => 3

module.exports = {
  removeDups,
  kthToLast,
}
