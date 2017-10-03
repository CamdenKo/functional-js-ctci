const LinkedList = require('./2.utilities')

const createLLFromArr = (arrOfVal) => {
  if (!arrOfVal.length) return null
  return new LinkedList(arrOfVal[0], createLLFromArr(arrOfVal.slice(1)))
}

const removeDups = (head, seenValues = new Set(), values = []) => {
  if (!head) {
    return createLLFromArr(values)
  }
  if (!seenValues.has(head.value)) {
    return removeDups(head.next, new Set([...seenValues, head.value]), [...values, head.value])
  }
  return removeDups(head.next, seenValues, values)
}

const getToLast = list =>
  list.next ? getToLast(list.next) : list.value

const removeLastNode = (head, values = []) =>
  head.next ? removeLastNode(head.next, [...values, head.value]) : createLLFromArr(values)

const kthToLast = (list, k) =>
  list ?
    k ?
      kthToLast(removeLastNode(list), k - 1) :
      getToLast(list) :
    null

const partition = (list, part, values = []) => {
  if (!list) return createLLFromArr(values)
  if (list.value < part) return partition(list.next, part, [list.value, ...values])
  return partition(list.next, part, [...values, list.value])
}

module.exports = {
  removeDups,
  removeLastNode,
  kthToLast,
  partition,
}
