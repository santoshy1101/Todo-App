
import Navbar from './components/Navabar'
import { useState } from 'react'
import InputItems from './components/InputItems'

function App() {
  const [color, setColor] = useState(
    'bg-slate-50 text-gray-800 ',
  )
  const Mode = (val) => {
    // console.log(val)
    val
      ? setColor('bg-slate-300 text-gray-800')
      : setColor('bg-sky-900 text-gray-50')
  }
  return (
    <div className={`h-full duration-1000 ${color}`}>
      <Navbar tog={Mode} />
   
      <InputItems/>
    </div>
  )
}

export default App
