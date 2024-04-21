import React from 'react'
import warehouse from "@/assets/icons/selector-warehouse.png"
import sea  from "@/assets/icons/sea.png"
import land from "@/assets/icons/land.png"
import grayexchange from "@/assets/icons/exchange_grey.png"
import { DatePickerDemo } from './Date'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import search from "@/assets/icons/search.png"
const Filter = () => {
const selected=true;
  return (
    <div className='w-[1300px] h-[300px] bg-white bg-opacity-60 mx-auto p-20 relative'>
    <ul className='flex gap-5'>
    <li className='flex '>
        <img className='rounded-full mr-2' src="./uil_exchange.png" alt="" />
    <h1 className='font-bold text-lg '>Get Price, Compare & Book</h1> 
    </li>
    <li className='flex '>
        <img className='rounded-full mr-2' src={warehouse.src} alt="" />
    <h1 className='font-bold text-lg '>Warehouse</h1> 
    </li>
    </ul>
<div className='mt-5 uppercase ml-5 text-[#454545] flex'>
    <p>Journey</p>
    <p className='ml-14'>Origin</p>
    <p className='ml-32'>Destination</p>
    </div>
    <div className='w-[1100px] h-[60px]  bg-white flex'>
    <ul className='flex items-center ml-4 gap-2'>
    <li>
        <img src={sea.src} className={`hover:cursor-pointer ${selected ? "bg-gray-200 rounded-sm":"" }`}  alt="" />
    </li>
    <li>
        <img className={`hover:cursor-pointer`} src={land.src}  alt="" />
    </li>
    </ul>
    <input className="ml-7 bg-gray-50 border border-gray-300 text-gtext text-sm rounded-lg focus:outline-none block w-[150px] h-[40px] my-auto p-2.5 " type="text" />
    <img className='rounded-full mr-2 h-[30px] bg-white shadow-lg absolute left-[28%] top-[55%]' src={grayexchange.src} alt="" />
    <input className="ml-7 bg-gray-50 border border-gray-300 text-gtext text-sm rounded-lg focus:outline-none block w-[150px] h-[40px] my-auto p-2.5 " type="text" />
    <div className='ml-5 my-auto flex'>
    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Cargo" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">1</SelectItem>
    <SelectItem value="dark">2</SelectItem>
    <SelectItem value="system">3</SelectItem>
  </SelectContent>
</Select>
<div className='ml-10'>
    <DatePickerDemo></DatePickerDemo>
  </div>
  <img className='my-auto ml-8 h-[35px] hover:cursor-pointer' src={search.src}></img>
    </div>
    </div>
    </div>
  )
}

export default Filter