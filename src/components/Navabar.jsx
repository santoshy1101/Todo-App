import React from 'react'
import { useState } from 'react'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { BsFillCloudMoonFill } from 'react-icons/bs'

const Navabar = ({ tog }) => {
  // const colorMode="light"
  const [mode, setMode] = useState(false)

  const handlMode = () => {
    setMode(!mode)
    tog(mode)
  }
  return (
    <div
      className={`duration-1000  transition ease-in-out delay-150 p-3 border-b-2 border-lime-300 ${
        mode ? 'bg-slate-800 ' : 'bg-slate-200 '
      }`}
    >
      <div p="2" className="flex flex-row justify-around space">
        <header>
          <button
            onClick={handlMode}
            className={`shadow-lg shadow-cyan-500 duration-1000 outline outline-offset-2 outline-cyan-500 px-5 py-2 rounded-full   ${
              mode
                ? 'bg-sky-800 text-stone-50 grayscale rotate-180 '
                : 'bg-cyan-800 text-stone-50 -hue-rotate-180'
            }`}
          >
            {mode ? <BsFillCloudSunFill /> : <BsFillCloudMoonFill />}
          </button>
        </header>

        <img
          className="w-10 bg-teal-300 rounded-xl "
          src="https://avatars.githubusercontent.com/u/107991675?v=4"
          alt="santosh"
        />
      </div>
    </div>
  )
}

export default Navabar
