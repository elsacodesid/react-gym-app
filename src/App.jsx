import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'


function App() {
  const [count, setCount] = useState(0)

  return (

      <div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'> 
        <Hero />
        <Workout />
        <Generator />
    </div>

  )
}

export default App
