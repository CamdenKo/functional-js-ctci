const numberSwapper = (arr) => {
  arr[0] += arr[1]
  arr[1] -= arr[0]
  arr[0] -= arr[1]
}

module.exports = {
  numberSwapper,
}
