const LinkedList = require('./2.utilities')

const generateLL = (values) => {
  const head = values[0]
}

const removeDups = (head, seenValues = new Set(), values = []) => {
  if (!head) {
    return generateLL(values)
  }
  if (!head.seenValues.has(head.value)) {
    seenValues.add(head.value)
    values.push(head.value)
  }
  return removeDups(head.next, seenValues, values)
}

module.exports = {
  removeDups,
}
