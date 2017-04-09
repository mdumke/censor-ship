import React from 'react'

const WordlistInput = props => {
  return (
    <textarea
      onChange={e => props.onInputChange(e.target.value)}
      className='form-control'
      rows='8'
      style={{resize: 'none'}}
      value={props.wordlist}
      placeholder='Each word on a new line' />
  )
}

export default WordlistInput
