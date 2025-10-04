import { useState } from 'react'


import './App.css'

// componentes
import NavBar from './componentes/NavBar'
import Introducao from './componentes/Introducao'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='relative w-full h-full overflow-hidden'>
    <video 
  className="fixed top-0 left-0 w-full h-full object-cover -z-20" 
 src="/video/1003.mp4"
  muted 
  autoPlay 
  loop 
  playsInline
/>
    <NavBar />
    <Introducao />
   </div>

  )
}

export default App
