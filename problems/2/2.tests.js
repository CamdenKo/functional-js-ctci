import * as CTCI from './2problems'
import LinkedList from './2.utilities'

describe('Chapter 2, Linked Lists', () => {
  describe('LinkedList tests', () => {
    describe('length', () => {
      it('returns 1 for a single node', () => {
        const head = new LinkedList(1)
        expect(head.length).to.be.eql(1)
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
