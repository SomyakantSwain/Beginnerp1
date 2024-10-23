import React from 'react'
import { useState } from 'react'
import "../index.css"

const Counter = () => {
    const [count,setcount]=useState(0);
    const increment=()=>setcount(count+1)
    
     const decrement =()=> setcount(count-1)
 
  return (
    <div className='container'>
<div>


        <h1 className='number'>
            {count}
        </h1>
</div>
<div className="btns-container">
    <button onClick={increment} className='increment'>+</button>
    <button onClick={decrement} className='decrement'>-</button>
</div>
    </div>
  )
}

export default Counter