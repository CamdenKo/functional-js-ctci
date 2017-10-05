const { expect } = require('chai')
const {
  MinStack,
  PlateStack,
  convertValuesToSeveralArrs,
} = require('./3problems')
const {
  fillArr,
} = require('./3.utilities')

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
  describe('3.3 Stack of Plates', () => {
    const fillArrWith1 = fillArr(1)
    const maxStackH = 10

    describe('convertValuestoSeveralArrs', () => {
      it('will create an array with an appropriate size', () => {
        expect(convertValuesToSeveralArrs(3, fillArrWith1(4)).length).to.eql(2)
      })
      it('will store them appropriately', () => {
        expect(convertValuesToSeveralArrs(3, fillArrWith1(4)))
          .to.eql([[1, 1, 1], [1]])
      })
    })

    it('will add a second stack when the number of elements exceed maxstackH', () => {
      const pstack = new PlateStack(maxStackH)
      const onePstack = pstack.push(1)
      expect(onePstack.numStacks).to.eql(1)
      const elevenPStack = onePstack.pushMany(...fillArrWith1(11))
      expect(elevenPStack.numStacks).to.eql(2)
    })
    it('will remove unused stacks', () => {
      const pstack = new PlateStack(maxStackH)
      const edited = pstack
        .pushMany(...fillArrWith1(11))
        .pop()
        .pop()
        .pop()
      expect(edited.numStacks).to.eql(1)
    })
    it('is LIFO', () => {
      const pstack = new PlateStack(maxStackH)
      const edited = pstack
        .pushMany(1, 2)
        .pop()
      expect(edited.peek()).to.eql(1)
    })
  })
})
