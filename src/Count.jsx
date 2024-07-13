import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false)


    const buttonClass = isToggled ? 'btn btn-danger' : 'btn btn-success'; //tenary operator
    const buttonText = isToggled ? "red": "green";



    const add =()=>{
        setCount(count+1)
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <button className={buttonClass} onClick={() => setIsToggled(!isToggled)}>{buttonText}</button>
    </div>
  )
}

export default Count
