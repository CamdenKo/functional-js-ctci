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
  palindromePermutation: (string) => {
    const countOddObjValues = obj =>
      Object.values(obj)
        .filter(count => count % 2 === 1)
        .length

    const letterCounts = string
      .split('')
      .filter(ele => ele !== ' ')
      .reduce((accumalator, curValue) => {
        const newValue = accumalator[curValue] ?
          accumalator[curValue] + 1 :
          1
        return Object.assign(accumalator, {[curValue]: newValue})
      }, {})

    return countOddObjValues(letterCounts) <= 1
  },
}
