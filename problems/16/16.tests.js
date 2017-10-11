const { expect } = require('chai')
const {
  numberSwapper,
} = require('./16problems')

describe('Chapter 16 Moderate', () => {
  describe('16.1 Number Swapper (due to the lack of passing nubmers by reference this will be done with an array of length 2)', () => {
    it('returns an array with the swapped numbers', () => {
      const numbers = [0, 1]
      numberSwapper(numbers)
      expect(numbers).to.eql([1, 0])
    })
    it('works for the same number', () => {
      const numbers = [0, 0]
      numberSwapper(numbers)
      expect(numbers).to.eql([0, 0])
    })
  })
})
