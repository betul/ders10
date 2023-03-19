import { useState } from "react"

const C1 =(props) => {
    const [number, numberUpdate] =useState(props.value)
  
    function incrementCount() {
      numberUpdate (prev => prev + props.plus)
   }
   
  console.log("c1")
    return (
        <p>{number}     
            <button onClick={incrementCount}>Increment</button>
            <button onClick={props.NewLogic}>App Function</button>

        </p>
    )
}

export default C1