import React, { useEffect, useState } from 'react'

function Hooks() {
  const [count , setCount] =useState(0);
  const [name , setName] =useState("");
  useEffect(()=>{
    console.log("useEffect is callled when the page is refresh");
    
  },[])

  useEffect(()=>{
console.log("useEffect is called when the state is change ", count);

  },[count])

  const handleButton=()=>{
    setCount((prevCount) => prevCount =prevCount+1);
  }
  return (
    <div className='bg-white'>

      <h1>count {count}</h1>
      <button onClick={handleButton} className='bg-red-500'>increment</button>
      <input type='text' placeholder='enter the text' value={name} onChange={(event) =>{setName(event.target.value)}} className='bg-white'/>
    </div>
  )
}

export default Hooks