import React from 'react'
type btmProps ={
  data:string,
  action:()=>void
}

const Buttom = ({data, action}:btmProps) => {
  return (
    <div>
      <button onClick={action}>
        {data}
      </button> 
    </div>
  )
}

export default Buttom
