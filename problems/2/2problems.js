const LinkedList = require('./2.utilities')

const createSingleNode = (arrOfVal) => {
  if (!arrOfVal.length) return null
  return new LinkedList(arrOfVal[0], createSingleNode(arrOfVal.slice(1)))
}

const generateLL = values =>
  createSingleNode(values.reverse())


const removeDups = (head, seenValues = new Set(), values = []) => {
  if (!head) {
    return generateLL(values)
  }
  if (!seenValues.has(head.value)) {
    seenValues.add(head.value)
    values.push(head.value)
  }
  return removeDups(head.next, seenValues, values)
}

module.exports = {
  removeDups,
}
