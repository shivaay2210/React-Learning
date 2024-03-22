import NewFunc from "./NewFunc"

function App() {
  const name = "madhav!"
  return (
    <>
      <h1> React vite {name} </h1>
      {/* if we don't use curly braces then username will be treated as string not an js variable */}
      {/* here {evaluated expression} we don't write whole js else write final js outcome */}
      {/* {2 + 2} {NAME}  ---> fine */}
      {/* {if(this cond) ? statement1 : statement2} ---> wrong */}
      {/* wrong : reason is finally it is an object and in js we don't have this as syntax like if else in object hell no  */}
    </>
    
  )
}

export default App

// in jsx we can only return one element that's why we wrap everything inside <> .. </>
