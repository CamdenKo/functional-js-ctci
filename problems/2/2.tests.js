const LinkedList = require('./2.utilities')
const { expect } = require('chai')
const {
  removeDups,
  kthToLast,
} = require('./2problems')

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
      const newName = removeDups(head)
      expect(newName.getLength()).to.be.eql(1)
    })
    it('works with long lists', () => {
      const head = new LinkedList(
        1,
        new LinkedList(
          2,
          new LinkedList(
            1,
            new LinkedList(
              2,
              new LinkedList(
                1,
              ),
            ),
          ),
        ),
      )

      const newHead = removeDups(head)
      expect(newHead.getLength()).to.be.eql(2)
    })
    it('keeps data in order', () => {
      const head = new LinkedList(
        1,
        new LinkedList(
          2,
          new LinkedList(
            1,
            new LinkedList(3),
          ),
        ),
      )

      const newHead = removeDups(head)
      expect(newHead.value).to.be.eql(1)
    })
  })

  describe('2.2 kth to last', () => {
    it('returns null if k is larger than length', () => {
      const head = new LinkedList(
        1,
      )
      expect(kthToLast(head, 2)).to.be.eql(null)
    })
    it('returns null if LinkedList is null', () => {
      expect(kthToLast(null, 2)).to.be.eql(null)
    })
    it('returns the value of the last node if k === 0', () => {
      expect(kthToLast(new LinkedList(1), 0)).to.be.eql(1)
    })
    it('returns the appropriate value', () => {
      expect(kthToLast(
        new LinkedList(1, new LinkedList(2)),
        1,
      )).to.be.eql(1)
    })
  })
})
