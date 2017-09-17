const {
  Set,
  List,
} = require('immutable')

module.exports = {
  isUnique: toTest => Set(toTest.split('')).size === toTest.length,
  checkPermutation: (string1, string2) => {
    const list1 = List(string1.split('')).sort()
    const list2 = List(string2.split('')).sort()
    return list1.equals(list2)
  },
  urlIfy: (toTest) => {
    const toTestList = List(toTest.split(''))
    const whiteSpaceCount = toTestList
      .filter(char => char === ' ')
      .size
    const numToReplace = whiteSpaceCount / 3

  }
}
