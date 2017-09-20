const {
  Set,
  List,
} = require('immutable')

const letterCountsObjFromArr = arr =>
  arr.reduce((accumalator, curValue) => {
    const newValue = accumalator[curValue] ?
      accumalator[curValue] + 1 :
      1
    return Object.assign(accumalator, { [curValue]: newValue })
  }, {})

module.exports = {
  isUnique: toTest => Set(toTest.split('')).size === toTest.length,
  checkPermutation: (string1, string2) => {
    const list1 = List(string1.split('')).sort()
    const list2 = List(string2.split('')).sort()
    return list1.equals(list2)
  },
  urlIfy: toTest =>
    toTest
      .split(' ')
      .filter(ele => ele)
      .join('%20'),
  palindromePermutation: (string) => {
    const countOddObjValues = obj =>
      Object.values(obj)
        .filter(count => count % 2 === 1)
        .length

    const letterCounts = letterCountsObjFromArr(string
      .split('')
      .filter(ele => ele !== ' '),
    )
    return countOddObjValues(letterCounts) <= 1
  },
  oneAway: (string1, string2) => {
    const differ = (letterObj1, letterObj2) => {
      const diffObj = Object.keys(letterObj2)
        .reduce((accumalator, curValue) => {
          const newValue = accumalator[curValue] ?
            Math.abs(accumalator[curValue] - (letterObj2[curValue] ? letterObj2[curValue] : 0)) :
            letterObj2[curValue]
          return Object.assign(accumalator, { [curValue]: newValue })
        },
        letterObj1)

      const numDiff = Object.values(diffObj)
        .reduce((accumalator, curValue) => accumalator + curValue, 0)
      
      return numDiff <= 2
    }

    [string1, string2]
      .map(str => letterCountsObjFromArr(str.split('')))
      // .reduce((accumalator, curValue) => (), false)
  },
}

