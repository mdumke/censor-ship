import React from 'react'

import shipIcon from '../images/ship-icon.png'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>The Censor Ship</h1>
      <p className='header__info'>
        Welcome to the Ministry of Information.
        Enter a piece of text and the words you'd like to censor.
      </p>

      <div className='header__icon'>
        <img src={shipIcon} alt='ship icon' height='30px' width='30px' />
      </div>
    </header>
  )
}

export default Header
