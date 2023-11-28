import React, { useState } from 'react'

const StateExample = () => {

    // let user = "React";

    const [user, setUser] = useState('React');

    const changeName = () => {
        setUser('JS')
    }

  return (
    <>
    <div>{user}</div>
    <button onClick={changeName}>changeName</button>
    </>
  )
}

export default StateExample