import { describe, it } from 'mocha'
import expect from 'expect'

import censor from '../src/utils/censor'

describe('censor', () => {
  it('does not change the text when an empty array is passed', () => {
    const input = 'Some example text'
    const forbidden = []
    const expectation = 'Some example text'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('ignores words that are not in the text', () => {
    const input = 'Some example text'
    const forbidden = ['Other', 'words']
    const expectation = 'Some example text'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('replaces a single word', () => {
    const input = 'Some example text'
    const forbidden = ['example']
    const expectation = 'Some ******* text'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('replaces an exact match twice', () => {
    const input = 'Some example text with example words'
    const forbidden = ['example']
    const expectation = 'Some ******* text with ******* words'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('replaces an exact match multiple times', () => {
    const input = 'blah blah blah and blah'
    const forbidden = ['blah']
    const expectation = '**** **** **** and ****'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('only replaces exact matches', () => {
    const input = 'Plural: examples'
    const forbidden = ['example']
    const expectation = 'Plural: examples'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('is case-insensitive (scenario 1)', () => {
    const input = 'Blah blah blAH BLAh but not BLAAAh'
    const forbidden = ['blah']
    const expectation = '**** **** **** **** but not BLAAAh'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('is case-insensitive (scenario 2)', () => {
    const input = 'Blah blah blAH BLAh but not BLAAAh'
    const forbidden = ['bLAH']
    const expectation = '**** **** **** **** but not BLAAAh'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('ignores . and ,', () => {
    const input = 'This one, or this one.'
    const forbidden = ['one']
    const expectation = 'This ***, or this ***'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('ignores ! and ?', () => {
    const input = 'You want it? You got it!'
    const forbidden = ['it']
    const expectation = 'You want **? You got **!'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('ignores multiple whitespaces', () => {
    const input = 'a a  a    a a'
    const forbidden = ['a']
    const expectation = '* *  *    * *'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('works with trailing or leading whitespace', () => {
    const input = '  blah blah blah   '
    const forbidden = ['blah']
    const expectation = '  **** **** ****   '
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('replaces two forbidden words', () => {
    const input = 'chit and chat'
    const forbidden = ['chit, chat']
    const expectation = '**** and ****'
    expect(censor(input, forbidden)).toEqual(expectation)
  })

  it('replaces multiple forbidden words multiple times', () => {
    const input = 'a b c d c b a'
    const forbidden = ['a', 'b', 'c']
    const expectation = '* * * d * * *'
    expect(censor(input, forbidden)).toEqual(expectation)
  })
})
