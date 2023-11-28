import React, { useState } from 'react'

const StateCounter = () => {
  
    const [counter, setCounter] = useState({value:50, type:'counter'});

    const incremetValuve = () => {
        setCounter((prev) => {
            return{value: prev.value + 1}
        })
    }

    const decrementValuve = () => {
        setCounter((prev) => {
            return{value: prev.value - 1}
        })
    }

  return (
    <div>
        <h3>
            {`counter valuve is ${counter.value}`}
            <button onClick={incremetValuve}>Increment</button>
            <button onClick={decrementValuve}>Decrement</button>
        </h3>
    </div>
  )
}

export default StateCounter