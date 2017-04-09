/**
 * censor
 *
 * Returns a string where all forbidden words have been replaced with *****
 *
 * @param {string} text - The cleartext input
 * @param {Array[string]} forbiddenWords - The words to replace
 *
 * @returns {string}  - The censored text
 *
 * As you can see from the examples below, a each instance of a word in the given
 * string will be replaced by some *** (as many as there are letters). This
 * replacement is case insensitive and multiple occurences will all be
 * replaced.
 *
 * Let'S define as a word every sequence of characters that is not whitespace,
 * or any of (.,!?).
 *
 * @example
 * ```js
 * censor('Some text', [])
 * // -> 'Some text'
 *
 * censor('Fun fact', ['fun'])
 * // -> '*** fact'
 *
 * censor('A rose is a rose', ['a', 'Rose'])
 * // -> '* **** is * ****'
 *
 * censor('First sentence. Second sentence!', ['sentence'])
 * // -> 'First *******. Second *******!'
 * ```
 */
function censor (text, wordlist) {
  // not implemented yet
  return text
}

export { censor }
