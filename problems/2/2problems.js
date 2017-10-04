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

const nextValidNode = node =>
  node ? node.next : null

const sumLists = (node1, node2, carry = 0, values = []) => {
  const toAdd = [
    node1 ? node1.value : 0,
    node2 ? node2.value : 0,
    carry,
  ]
  const sum = toAdd.reduce((accum, value) => accum + value, 0)
  const toCarry = sum - 10 >= 0 ? 1 : 0
  const toValue = sum - 10 >= 0 ? sum - 10 : sum
  if (!toValue && !toCarry) return createLLFromArr(values)
  const nextNode1 = nextValidNode(node1)
  const nextNode2 = nextValidNode(node2)
  return node1 || node2 || toCarry ?
    sumLists(nextNode1, nextNode2, toCarry, [...values, toValue]) :
    createLLFromArr([...values, toValue])
}

module.exports = {
  removeDups,
  removeLastNode,
  kthToLast,
  partition,
  sumLists,
}
