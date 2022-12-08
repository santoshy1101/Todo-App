import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const Wheather = () => {
    const [data,setData] =useState([])
    const [query ,setQuery] =useState("delhi")

    // data ===undefined?console.log("satrt :" ,data) : console.log("empty :", data)
    const getData = async(query="delhi")=>{
        // console.log(query)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '235bbe7c40mshc100adf39dcd554p17cd37jsn4c6a0cf66021',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        
       const res= await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${query}`, options)
       const d = await res.json()
        // console.log(data)
       return d
            // .then(response => response.json())
            // .then(response => console.log(response))
            // .catch(err => console.error(err));

    }

    useEffect(()=>{
      
    // getData(query).then((result)=>setData([{...result}]))
    // setData(result)
   
    },[query])

    const handleChange = (e)=>{
        setTimeout(()=>{
            setQuery(e.target.value)
            // console.log("working")
        },5000)
       
    }
  return (
  <div>
  <h1>wheather</h1>
  <div className='flex border-2 items-center justify-center'>
  <input type="text"  className='text-black placeholder:italic placeholder:text-slate-400 block  w-1/4  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' />
  <button className='px-3 py-2 rounded-2xl border-2 border-black'>Search</button>
  </div>
  
  </div>
  )
}

export default Wheather

