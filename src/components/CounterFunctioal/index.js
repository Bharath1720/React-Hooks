import {useState} from 'react'

const CounterFunctional = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(count + 1)
  }

  const onDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Counter</h1>
      {/* <p>Count {this.state.count}</p> */}
      <p>Count {count}</p>
      <button type="button" onClick={onIncrement}>
        Increase
      </button>
      <button type="button" onClick={onDecrement}>
        Decrease
      </button>
    </div>
  )
}

export default CounterFunctional
