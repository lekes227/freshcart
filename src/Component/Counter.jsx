import React, {useState} from 'react'

const Counter = () => {
    const [counter, setCounter]=useState(0)
    const subtract=()=>{
      setCounter(counter-1)
    } 
    const add=()=>{
      setCounter(counter+1)
    }
  
    return (
      <div>
      
      <div >
      
      <button  className='btn btn3'onClick={subtract}>-</button>
      <span className='slide-span'>{counter}</span>
        
        <button className='btn btn2' onClick={add}>+Add</button>
      </div>
      </div>
    )
}

export default Counter