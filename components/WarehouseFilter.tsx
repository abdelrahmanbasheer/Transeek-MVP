'use client'
import React, { useState } from 'react'
import warehouse from "@/assets/icons/selector-warehouse.png"
import land from "@/assets/icons/land.png"
  import search from "@/assets/icons/search.png"
const WarehouseFilter = () => {
const selected=true;
const [query, setQuery] = useState("")
  return (
    <div className=' bg-white bg-opacity-60 px-[30%]  mt-14 relative '>
    <ul className='flex gap-5'>
    <li className='flex '>
        <img className='rounded-full mr-2' src={warehouse.src} alt="" />
    <h1 className='font-bold text-lg '>Warehouse</h1> 
    </li>
    </ul>
<div className='mt-5 uppercase ml-1 text-[#454545] flex'>
    <p >Journey</p>
    <p className='ml-28'>Location</p>
    </div>
    <div className='w-[1100px] h-[60px]  bg-white flex'>
    <ul className='flex items-center ml-4 gap-2'>
    <li className='bg-black bg-opacity-20 rounded-xl'>
        <img className={`hover:cursor-pointer`} src={land.src}  alt="" />
    </li>
    </ul>
    <input className="ml-7 bg-gray-50 border border-gray-300 text-gtext text-sm rounded-lg focus:outline-none block w-[300px] h-[40px] my-auto p-2.5 " type="text"
     value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
    <div className='my-auto'>
<div className='ml-10'>
  </div>
  <img className='my-auto ml-8 h-[35px] hover:cursor-pointer' src={search.src}></img>
    </div>
    </div>
    </div>
  )
}

export default WarehouseFilter