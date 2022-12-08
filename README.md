{cloud_pct , feels_like , humidity , max_temp , min_temp , sunrise , sunset , temp , wind_degrees , wind_speed}

  {
    data ? data.map(({cloud_pct , feels_like , humidity , max_temp , min_temp , sunrise , sunset ,temp , wind_degrees , wind_speed},id)=>(
        <VStack key={id}>
        <Button>Cloud_Pact : {cloud_pct}</Button>
        <Button>Feels_Like : {feels_like}</Button>
        <Button>Humidity : {humidity}</Button>
        <Button>Max_Temp : {max_temp}</Button>
        <Button>Min_Temp : {min_temp}</Button>
        <Button>Sunrise : {sunrise}</Button>
        <Button>Sunset : {sunset}</Button>
        <Button>Temp : {temp} °C</Button>
        <Button>Wind_Degrees : {wind_degrees}</Button>
        <Button>Wind_Speed : {wind_speed}</Button> 
        </VStack>
    )) :null
  }

     { data? <VStack mt={5}>
    <Button>Cloud_Pact : {data[0].cloud_pct}</Button>
    <Button>Humidity : {data[0].humidity } %</Button>
    <Button>Temp : {data[0].temp} °C</Button>
    </VStack> :null

  }



  wheather 


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

