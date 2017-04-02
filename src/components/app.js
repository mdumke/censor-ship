import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import CleartextInput from './cleartext-input'
import CensoredOutput from './censored-output'

import censor from '../utils/censor.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      censoredText: ''
    }
  }

  handleCleartext (text) {
    console.log(text)
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-6">
          <CleartextInput
            onInputChange={text => this.setState({
              censoredText: censor(text)
            })} />
        </div>

        <div className="col-md-6">
          <CensoredOutput text={this.state.censoredText} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'))
