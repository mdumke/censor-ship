import React from 'react'

const WordlistInput = props => {
  return (
    <textarea
      onChange={e => props.onInputChange(e.target.value)}
      className='form-control'
      rows='8'
      style={{resize: 'none'}}
      value={props.wordlist}
      placeholder='Enter words to censor' />
  )
}

export default WordlistInput
