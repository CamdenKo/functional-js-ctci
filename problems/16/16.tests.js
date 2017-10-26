const { expect } = require('chai')
const {
  numberSwapper,
  wordFrequencies,
  cacheWordFrequencies,
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

  describe('16.2 word frequencies', () => {
    it('returns 0 if no occurences', () => {
      expect(wordFrequencies('hello world', 'abe')).to.eql(0)
    })
    it('returns the proper number for multiple occurences', () => {
      expect(wordFrequencies('hello a hello', 'hello')).to.eql(2)
    })
    it('doesn\'t count partial words', () => {
      expect(wordFrequencies('hello hello1 hell hello', 'hello')).to.eql(2)
    })
  })

  describe('16.2 cachedWordFrequencies', () => {
    it('returns a function', () => {
      expect(typeof cacheWordFrequencies('ls sdf')).to.eql('function')
    })
    it('returns a function that returns a number', () => {
      const wordFreq = cacheWordFrequencies('ls dff ls')
      expect(typeof wordFreq('ls')).to.eql('number')
    })
  })
})
