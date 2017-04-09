import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import '../styles/main.css'

import Header from './header'
import CleartextInput from './cleartext-input'
import CensoredOutput from './censored-output'
import WordListInput from './wordlist-input'

import { censor } from '../utils/censor.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      censoredText: '',
      wordlist: 'Freedom\nMusic\nFun',
      text: ''
    }
  }

  render () {
    return (
      <div>
        <Header />

        <div className='row'>
          <div className='col-md-4'>
            <div className='input-element'>
              <h3 className='input-element__title'>Input</h3>
              <CleartextInput
                onInputChange={text => this.setState({
                  text: text,
                  censoredText: censor(text, this.state.wordlist)
                })} />
            </div>
          </div>

          <div className='col-md-4'>
            <div className='input-element'>
              <h3 className='input-element__title'>Forbidden Words</h3>
              <WordListInput
                onInputChange={words => this.setState({
                  wordlist: words,
                  censoredText: censor(this.state.text, words)
                })}
                wordlist={this.state.wordlist} />
            </div>
          </div>

          <div className='col-md-4'>
            <div className='input-element'>
              <h3 className='input-element__title'>Output</h3>
              <CensoredOutput text={this.state.censoredText} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'))
