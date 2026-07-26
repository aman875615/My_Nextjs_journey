'use client'
import React,{useState} from 'react'

const page = () => {
  const [count, setCount] = useState<number>(0)

  function fn(){

  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        
        Increment
      </button>
    </div>
  )
}

export default page
