const { expect } = require('chai')
const {
  isUnique,
  checkPermutation,
  urlIfy,
  palindromePermutation,
  oneAway,
  stringCompression,
  isSubstring,
} = require('./1problems')

describe('Chapter 1, [], ""', () => {
  describe('1.1 isUnique', () => {
    it('returns true for null string', () => {
      const test = ''
      expect(isUnique(test)).to.be.equal(true)
    })
    it('returns true for same character but different case', () => {
      const test = 'aA'
      expect(isUnique(test)).to.be.equal(true)
    })
    it('returns false for a string with repeated characters', () => {
      const test = 'AA'
      expect(isUnique(test)).to.be.eql(false)
    })
    it('returns false for duplicated special chars', () => {
      const test = '&asdkfjnwn&'
      expect(isUnique(test)).to.be.eql(false)
    })
    it('returns true for a long unique string with special chars', () => {
      const test = 'jkIP19+_'
      expect(isUnique(test)).to.be.eql(true)
    })
  })

  describe('1.2 checkPermutation', () => {
    it('returns true if both strings are empty', () => {
      const strings = ['', '']
      expect(checkPermutation(...strings)).to.be.eql(true)
    })
    it('returns true if the strings are one char each', () => {
      const strings = ['a', 'a']
      expect(checkPermutation(...strings)).to.be.eql(true)
    })
    it('returns true with complex strings with special chars', () => {
      const strings = ['Ab123$', '321$Ab']
      expect(checkPermutation(...strings)).to.be.eql(true)
    })
    it('returns false when strings are different', () => {
      const strings = ['ASDF@R@#R', '23423rf']
      expect(checkPermutation(...strings)).to.be.eql(false)
    })
  })

  describe('1.3 urlIfy', () => {
    it('returns null string for null string', () => {
      const string = ''
      expect(urlIfy(string)).to.be.eql(string)
    })
    it('properly replaces when one space', () => {
      const string = 'url 1  '
      expect(urlIfy(string)).to.be.eql('url%201')
    })
    it('properly handles many spaces', () => {
      const string = 'url 1 2 3 4        '
      expect(urlIfy(string)).to.be.eql('url%201%202%203%204')
    })
  })

  describe('1.4 palindromePermutation', () => {
    it('returns true for null string', () => {
      const string = ''
      expect(palindromePermutation(string)).to.be.eql(true)
    })
    it('ignores whitespace', () => {
      const string = 'a b c d c b a'
      expect(palindromePermutation(string)).to.be.eql(true)
    })
    it('returns false', () => {
      const string = '22j2ijii'
      expect(palindromePermutation(string)).to.be.eql(false)
    })
  })

  describe('1.5 oneAway', () => {
    it('returns true for identical strings', () => {
      const strings = ['asdf', 'asdf']
      expect(oneAway(...strings)).to.be.eql(true)
    })
    it('has expected behavior for null strings', () => {
      const strings = ['', 'a']
      expect(oneAway(...strings)).to.be.eql(true)
    })
    it('works for insertion', () => {
      const strings = ['asdf', 'asedf']
      expect(oneAway(...strings)).to.be.eql(true)
    })
    it('works for deletion', () => {
      const strings = ['asdf', 'asf']
      expect(oneAway(...strings)).to.be.eql(true)
    })
    it('works for replacement', () => {
      const strings = ['asdf', 'asef']
      expect(oneAway(...strings)).to.be.eql(true)
    })
    it('returns false if more than one away', () => {
      const strings = ['adsffff', 'asdff']
      expect(oneAway(...strings)).to.be.eql(false)
    })
  })

  describe('1.6 stringCompression', () => {
    it('returns original string if the original string is shorter', () => {
      const string = 'a'
      expect(stringCompression(string)).to.be.eql(string)
    })
    it('returns the original string if the original string is the same length', () => {
      const string = 'aa'
      expect(stringCompression(string)).to.be.eql(string)
    })
    it('works for differing letters', () => {
      const string = 'aaabbbccc'
      expect(stringCompression(string)).to.be.eql('3a3b3c')
    })
    it('handles the same letter apart from each other', () => {
      const string = 'aabbbbaa'
      expect(stringCompression(string)).to.be.eql('2a4b2a')
    })
    it('handles upper and lower case characters', () => {
      const string = 'AAAaaaAAA'
      expect(stringCompression(string)).to.be.eql('3A3a3A')
    })
  })

  describe('1.9- isSubstring', () => {
    it('returns true for a null string', () => {
      const strings = ['', 'asdf']
      expect(isSubstring(...strings)).to.be.eql(true)
    })
    it('works', () => {
      const strings = ['asd', 'asdf']
      expect(isSubstring(...strings)).to.be.eql(true)
    })
    it('works in any order', () => {
      const strings = ['asdf', 'asd']
      expect(isSubstring(...strings)).to.be.eql(true)
    })
    it('returns false if not substring', () => {
      const strings = ['asdfffw', 'oooo']
      expect(isSubstring(...strings)).to.be.eql(false)
    })
    it('takes into account whitespace', () => {
      const strings = ['12345 678', '56']
      expect(isSubstring(...strings)).to.be.eql(false)
    })
  })
})
