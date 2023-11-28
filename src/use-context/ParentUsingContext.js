import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();

export default function ParentUsingContext() {
  const [user] = useState('React')
  return (
    <UserContext.Provider value={user}>
        <h1>ParentUsingContext</h1>
        <Component1/>
    </UserContext.Provider>
  )
}


///////Comonents//////
/////////////////////

function Component1() {
  return (
    <>
      <div>Component1</div>
      <Component2/>
    </>

  )
}

///////Component2//////
///////////////////////

function Component2() {

  const user = useContext(UserContext);
  return (
    <>
      <div>Component2</div>
      <h3>{`user is ${user}`}</h3>
    </>

  )
}
