import React from 'react'

const CleartextInput = props => {
  return (
    <textarea
      onChange={e => props.onInputChange(e.target.value)}
      className='form-control'
      rows='8'
      style={{resize: 'none'}}
      placeholder='Please enter some text'></textarea>
  )
}

export default CleartextInput
