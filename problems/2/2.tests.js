const LinkedList = require('./2.utilities')
const { expect } = require('chai')
const {
  removeDups,
  kthToLast,
  removeLastNode,
  partition,
  sumLists,
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
    describe('removeLastNode', () => {
      it('returns null if a linkedList with one node is supplied', () => (
        expect(removeLastNode(new LinkedList(1))).to.be.eql(null)
      ))
      it('makes the linked list one shorter', () => {
        const head = new LinkedList(1, new LinkedList(2))
        expect(removeLastNode(head).getLength()).to.be.eql(1)
      })
      it('keeps the proper nodes', () => {
        const head = new LinkedList(1, new LinkedList(2))
        expect(removeLastNode(head).value).to.be.eql(1)
      })
    })
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

  describe('2.4 partition', () => {
    it('puts value less than partition to left and greater to right', () => {
      expect(partition(new LinkedList(3, new LinkedList(1)), 2).getSequentialValues())
        .to.be.eql([1, 3])
    })
    it('puts partition on right side', () => {
      expect(partition(new LinkedList(3, new LinkedList(2)), 3).getSequentialValues())
        .to.be.eql([2, 3])
    })
  })

  describe('2.5 sumLists', () => {
    it('returns a LL', () => {
      expect(sumLists(new LinkedList(1), new LinkedList(1)) instanceof LinkedList).to.eql(true)
    })
    it('adds simple LL\'s', () => {
      expect(sumLists(new LinkedList(1), new LinkedList(2)).value).to.eql(3)
    })
    it('adds simple multiple LL\'s', () => {
      const first = new LinkedList(1, new LinkedList(2))
      const second = new LinkedList(3, new LinkedList(4))
      expect(sumLists(first, second).getSequentialValues()).to.eql([4, 6])
    })
    it('works the same regardless of order', () => {
      const first = new LinkedList(1, new LinkedList(2))
      const second = new LinkedList(3, new LinkedList(4))
      expect(sumLists(first, second).getSequentialValues()).to.eql(
        sumLists(second, first).getSequentialValues(),
      )
    })
    it('works when having to carry a one', () => {
      expect(sumLists(new LinkedList(5), new LinkedList(5)).getSequentialValues()).to.eql([0, 1])
    })
    it('works with complex summations', () => {
      const first = new LinkedList(7, new LinkedList(1, new LinkedList(6)))
      const second = new LinkedList(5, new LinkedList(9, new LinkedList(2)))
      expect(sumLists(first, second).getSequentialValues()).to.eql([2, 1, 9])
    })
    it('works with lists of different lengths', () => {
      expect(sumLists(new LinkedList(1), new LinkedList(1, new LinkedList(2))).getSequentialValues())
        .to.eql([2, 2])
    })
  })
})
