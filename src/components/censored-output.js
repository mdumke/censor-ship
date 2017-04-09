import React from 'react'

const CensoredOutput = props => {
  return (
    <textarea
      placeholder='Censored Output'
      value={props.text}
      rows='8'
      style={{resize: 'none'}}
      className='form-control disabled' />
  )
}

export default CensoredOutput
