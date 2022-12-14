import React from 'react'

const Items = (prop) => {
  const { date, title, amount } = prop.data
  const day=date.slice(8, 10)

  const month= +date.slice(5, 7)
  const year= date.slice(0, 4)
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
   10: "October",
   11: "November",
   12: "December"
  };
  
  return (
    <>
      <div className="flex flex-col items-center justify-between px-4 py-3 my-5 bg-gray-600 sm:flex-row rounded-xl">
        <div className="flex flex-col items-center justify-between w-3/5 sm:flex-row lg:w-1/5 md:w-2/5 sm:w-3/5">
          <div className="px-4 py-1 text-center bg-transparent bg-gray-800 border lg:w-7/12 dashed rounded-xl">
            <h4>{months[month]}</h4>
            <h4>{year}</h4>
            <h4>{day}</h4>
          </div>
          <div className="bordr-2">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="px-6 py-3 border rounded-lg cursor-pointer hover:bg-violet-600 bg-violet-900">
          ₹{amount}
        </div>
      </div>
    </>
  )
}

export default Items
