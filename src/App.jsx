import { useState } from "react"
import C1 from "./C1"

function App(props) {
    console.log("render")

    let [number, numberUp] = useState(0)
    
    let updateNumber = () => {
        numberUp(prev => prev + 1)
    }
    return (
        <>
        <p>App1 {props.content}</p>
        <p>number {number}</p>
        <button onClick={updateNumber}>Increment</button>

        <C1 color={["red", "blue"]}/>
        </>
    )

}

export default App