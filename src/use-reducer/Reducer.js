import React from 'react';
import { useReducer } from 'react';


//State valuve is 1000,  
const transactionReducer = (state,action) => {
    switch (action.type) {
        case 'WITHDRAW':
            return state - action.payload
        case 'DEPOSITE':
            return state + action.payload
        default:
            return state
    }
}

export default function Reducer() {

    const withdraw = (amount) => {
        dispatch({type:'WITHDRAW',payload:amount})
    }

    const deposite = (amount) => {
        dispatch({type:'DEPOSITE',payload:amount})
    }

    const [state, dispatch] = useReducer(transactionReducer, 1000)

  return (
  <>
     <h3>{`balance is ${state}`}</h3>
     <button onClick={() => withdraw(500)}>withdraw</button>
     <button onClick={() => deposite(500)}>deposite</button>
  </>
  )
}
