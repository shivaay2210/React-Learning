import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  // Refresh karne pe olive is lie aa rah a kio ke usestate ki defualt value di hai humne
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap bottom-10 justify-center inset-x-2 px-2 gap-[6px]">
          <div className="colorBox flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style = {{backgroundColor: "red"}} // vanila css
                
                // about onclick in jsx

                // The on click method in React expects a function reference
                // You can't directly pass parameters inside the function, instead, you need
                //  to pass it as a reference or use arrow function syntax

                // <button onclick="activateLasers()">
                //   Activate Lasers
                // </button>
                // <button onClick={activateLasers}>
                //   Activate Lasers
                // </button>

                // like html onclick="func()" here you just need to pass it as
                //  a reference or use arrow function syntax
                onClick={() => setColor("red")}
                
              >Red</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style = {{backgroundColor: "green"}}
                onClick={() => setColor("green")}
              >Green</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style = {{backgroundColor: "blue"}}
                onClick={() => setColor("blue")}
              >Blue</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style = {{backgroundColor: "violet"}}
                onClick={() => {
                    setColor("violet")
                  }
                }
              >Violet</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style = {{backgroundColor: "orange"}}
                onClick={() => setColor("orange")}
              >Orange</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style = {{backgroundColor: "black"}}
                onClick={() => setColor("black")}
              >Black</button>
          </div>
            
        </div>
      </div>
    </>
  )
}

export default App
