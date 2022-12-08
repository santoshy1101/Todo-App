import React, { useState } from 'react'
import Items from './Items'

const InputItems = () => {
  const [info, setInfo] = useState([])
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [id, setId] = useState(1)

  const handleAdd = () => {
    if (title === '' && amount === '' && date === '') {
      return
    } else {
      setId(id + 1)
      const newInfo = { title, date, amount, id }
      setInfo([...info, newInfo])
      setTitle('')
      setDate('')
      setAmount('')
      setData([...info, newInfo])
    }
  }

  const handleFilter = (val) => {
    val === 'Reset'
      ? setInfo(data)
      : setInfo(data.filter((item) => item.date.slice(0, 4) === val))
  }
  return (
    <div className="h-full p-10 font-bold text-slate-800 bg-gradient-to-r from-indigo-800">
      <div className="w-2/4 p-5 m-auto rounded-3xl bg-light-violet">
        <div className="grid grid-cols-2 gap-4 p-10 ">
          <div className="flex flex-col">
            <label>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="w-full p-1 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label>Amount</label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              type="number"
              className="w-full p-1 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label>Date</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              className="w-full p-1 rounded-sm"
            />
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="relative bottom-0 w-32 h-12 font-bold cursor-pointer left-3/4 rounded-2xl hover:bg-violet-600 bg-violet-900 text-slate-50"
        >
          Add Items
        </button>
      </div>

      <div className="p-4 mt-5 bg-gray-900 text-slate-100 rounded-xl">
        <div className="flex justify-between px-5 py-2 ">
          <label className="block mb-2 text-sm font-bold dark:text-white">
            Filter by year
          </label>
          <select
            className="w-32 max-w-xs px-2 py-1 rounded-md select text-slate-800"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option>Reset</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
          </select>
        </div>
        {info.map((item) => (
          <Items key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default InputItems
