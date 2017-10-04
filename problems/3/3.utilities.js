const fillArr = (value) => {
  const recursiveFillArr = (count, values = []) =>
    count ? recursiveFillArr(value, count - 1, [...values, value]) : values
  return recursiveFillArr
}

module.exports = {
  fillArr,
}
