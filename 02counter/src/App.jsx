import { useState } from 'react'
import './App.css'

function App() {

  // why hooks ? ui updation ko react control karta h agar ham
  // sirf counter++ kar denge toh change visible nhi hoga
  // hame update karne ke liye classic js means getElementById etc etc 
  // se update karna hoga toh to reduce itna likhna we use hooks
  // sidha change hoga ui pe
  let [counter, setCounter] = useState(15) // initial value of counter as parameter
  // useState gives an array with 2 indices first value second function

  // let counter = 5;

  function addValue() {
    // console.log("counter clicked", counter);
    // counter++;
    setCounter((prev) => prev + 1);
  }

  // const addValue = () => {
  //   console.log("counter clicked", counter);
  //   counter++;
  // }

  function removeValue() {
    // console.log("counter clicked", counter);
    // counter++;
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>02 React Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}> Add value {counter} </button>
      <br/>
      <button onClick={removeValue}>Remove value {counter} </button>
      <footer>yha bhi karunga update {counter} </footer>
    </>
  )
}

export default App


