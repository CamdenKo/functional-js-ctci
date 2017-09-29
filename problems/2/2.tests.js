const LinkedList = require('./2.utilities')
const { expect } = require('chai')

describe('Chapter 2, Linked Lists', () => {
  describe('LinkedList tests', () => {
    describe('getLength', () => {
      it('returns 1 for a single node', () => {
        const head = new LinkedList(1)
        expect(head.getLength()).to.be.eql(1)
      })
      it('returns the number of nodes', () => {
        const head = new LinkedList(1)
        head.next = new LinkedList(2)
        head.next.next = new LinkedList(3)
        expect(head.getLength()).to.be.eql(3)
      })
    })
  })

  describe('2.1 removeDups', () => {
    it('returns a linkedList without duplicates', () => {
      const head = new LinkedList(1)
      head.next = new LinkedList(1)
    })
  })
})
