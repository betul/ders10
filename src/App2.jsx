import C1 from "./C1"

const App = () => {
    function NewLogic ()  {
        alert("hello")
    }
    return (
        <>
        <C1 value={1} plus={2} NewLogic={NewLogic}/>
        <C1 value={2} plus={25} NewLogic={NewLogic}/>
        <C1 value={3} plus={8} NewLogic={NewLogic}/>

        </>
    )
}
console.log("app")

export default App