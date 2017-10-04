const { expect } = require('chai')
const {
  MinStack,
} = require('./3problems')

describe('Chapter 3 S + Q\'s', () => {
  describe('3.2 MinStack min property', () => {
    it('returns null if stack is empty', () => {
      const stack = new MinStack()
      expect(stack.min).to.eql(null)
    })
    it('returns the lowest value no matter the order of insertion', () => {
      const stack = new MinStack(1, 2, 3)
      expect(stack.min).to.eql(1)
      const reverseStack = new MinStack(3, 2, 1)
      expect(reverseStack.min).to.eql(1)
    })
    it('returns the lowest value even if the lowest value has been popped', () => {
      const stack = new MinStack(3, 2, 1)
      expect(stack.pop().min).to.eql(2)
    })
  })
})
