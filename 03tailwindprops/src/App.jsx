import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username: "madhav",
    age: "20"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg mb-4'>Tailwind Testing</h1>
      <Card username = "Madhav" obj = {myObj} />
    </>
  )
}

export default App
