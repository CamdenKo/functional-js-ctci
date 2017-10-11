const numberSwapper = (arr) => {
  arr[0] += arr[1]
  arr[1] -= arr[0]
  arr[0] -= arr[1]
}

const wordFrequencies = (fullText, target) =>
  fullText
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
    )[target] || 0

module.exports = {
  numberSwapper,
  wordFrequencies,
}
