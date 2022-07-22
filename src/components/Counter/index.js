import {Component} from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    console.log('clicked')
    this.setState({
      count: this.state.count + 1,
    })
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Counter</h1>
        <p>Count {this.state.count}</p>
        <p>Count {count}</p>
        <button type="button" onClick={this.onIncrement}>
          Increase
        </button>
        <button type="button" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
