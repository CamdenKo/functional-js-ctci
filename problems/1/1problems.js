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
    const oneReplace = (str1, str2) =>
      str1
        .split('')
        .reduce((accumalator, currentValue, currentIndex) =>
          currentValue !== str2[currentIndex] ? accumalator + 1 : accumalator, 0)
        === 1

    const oneInsertOrDel = (str1, str2) => {
      const [longerString, shorterString] = str1.length > str2.length ?
        [str1, str2] :
        [str2, str1]

      const diff = shorterString.split('').reduce((accumalator, currentValue, currentIndex) =>
        accumalator === -1 ?
          currentValue === longerString[currentIndex] ?
            accumalator :
            currentIndex
          :
          accumalator,
      -1,
      )
      if (diff === -1) {
        return true
      }
      return shorterString.slice(diff) === longerString.slice(diff + 1)
    }

    return string1 === string2 ?
      true :
      string1.length === string2.length ?
        oneReplace(string1, string2) :
        Math.abs(string1.length - string2.length) === 1 ?
          oneInsertOrDel(string1, string2) :
          false
  },
}

