const numberSwapper = (arr) => {
  arr[0] += arr[1]
  arr[1] -= arr[0]
  arr[0] -= arr[1]
}

const wordFrequenciesObj = text =>
  text
    .split(' ')
    .filter(ele => ele)
    .reduce(
      (accum, curValue) => Object.assign(
        accum,
        {
          [curValue]: accum[curValue]
            ? accum[curValue] + 1
            : 1,
        },
      ),
      {},
    )

const wordFrequencies = (fullText, target) =>
  wordFrequenciesObj(fullText)[target] || 0

const cacheWordFrequencies = (fullText) => {
  const frequencies = wordFrequenciesObj(fullText)
  return target =>
    frequencies[target] || 0
}

module.exports = {
  numberSwapper,
  wordFrequencies,
  cacheWordFrequencies,
}
