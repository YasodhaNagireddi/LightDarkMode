// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    const {isDarkMode} = this.state

    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    let modeClassName

    const {isDarkMode} = this.state

    const modeText = isDarkMode
      ? ((modeClassName = 'dark-mode'), 'Light Mode')
      : ((modeClassName = 'light-mode'), 'Dark Mode')
    return (
      <div className="mode-bg-container">
        <div className={modeClassName}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.changeMode}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
