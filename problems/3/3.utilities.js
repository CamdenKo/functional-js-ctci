const fillArr = value =>
  (count, values = []) =>
    count ? fillArr(value, count - 1, [...values, value]) : values

module.exports = {
  fillArr,
}
