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
  urlIfy: (toTest) =>
    toTest
      .split(' ')
      .filter(ele => ele)
      .join('%20'),
}
