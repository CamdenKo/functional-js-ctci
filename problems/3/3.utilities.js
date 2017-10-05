const fillArr = (value) => {
  const recursiveFillArr = (count, values = []) =>
    count ? recursiveFillArr(count - 1, [...values, value]) : values
  return recursiveFillArr
}

module.exports = {
  fillArr,
}
