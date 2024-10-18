import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: newRandomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number </h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>

          <p className="display-number"> {count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
