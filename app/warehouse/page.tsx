'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import header from "@/assets/images/warehouse-page-header.png"
import tester from "@/assets/images/warehouse-page-test.png"
import PagesNavbar from '@/components/Navbar/PagesNavbar'
import warehouse from "@/assets/icons/selector-warehouse.png"
import land from "@/assets/icons/land.png"
import useSWR from 'swr'
import search from "@/assets/icons/search.png"
type warehouseType={
  name:string,
  location:string,
  capacity:string,
  inventory:string,
  email:string,
  phoneNo:string,

}[]

const page = () => {
  
  const data:warehouseType=[
    {
      name:"Test-1",
      location:"26 october city, cairo, egypt",
      capacity:"200",
      email:"test@gmail.com",
      inventory:"200",
      phoneNo:"0155999221",

    }
  ]
  const [allWarehouses, setAllWarehouses] = useState<warehouseType>(data)
  const [warehouses, setWarehouses] = useState<warehouseType>(data)
  
  const [query, setQuery] = useState("")

  const handleSearch = (query:string) => {
    const filteredData = allWarehouses.filter((item) => {
      return item.location.toLowerCase().includes(query.toLowerCase()) 
    })
    setWarehouses(filteredData)
  }
  return (
    <div>
        <nav>
      <Navbar></Navbar>
      <PagesNavbar title={"warehouse"}></PagesNavbar>
      </nav>
      <main>
        <div className=''>
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
  <img onClick={()=>{
handleSearch(query)
  }} className='my-auto ml-8 h-[35px] hover:cursor-pointer' src={search.src}></img>
    </div>
    </div>
    </div>
      </div>
        <div className='my-16'>
        <img className='mx-auto' src={header.src} alt="" />
        <h1 className='font-bold text-center text-primary text-4xl mt-4'>Warehouse</h1>
        </div>
    <ul className='flex flex-col gap-6 mx-[300px] last:mb-10'>
      {
        warehouses?.map((item)=>(
          <li className='grid grid-cols-2  border-t-2 p-3'>
          <img className='border-r-2 px-5 border-gray-100' src={tester.src} alt="" />
          <div className='flex flex-col ml-5 gap-3'>
          <h1 className='font-bold text-left text-primary text-2xl mt-4'>{item.name}</h1>
          <p className='text-#666C89 font-medium mt-5 text-sm opacity-70'>We are dedicated to creating added value <br /> for our customers by implementing modern <br /> technology in our operations.</p>
          <ul  className='marker:text-primary list-disc pl-5' role='list'>
          <li className='font-semibold'>
         location : {item.location}
          </li>
          <li className='font-semibold'>
          Capacity: {item.capacity} sq. ft.
          </li>
          <li className='font-semibold'>
          Inventory: {item.inventory} units
          </li>
          <li className='font-semibold'>
          Security: 24/7 surveillance, access control
          </li>
          <li className='font-semibold'>
          email: {item.email}
          </li>
          <li className='font-semibold'>
          phone number: {item.phoneNo}
          </li>
          </ul>
          {/* <p className='p-4 bg-primary text-white w-[125px] h-[47px] text-center pb-10 mt-5 rounded-lg'>Contact</p> */}
          </div>
          </li>
        ))
      }
    </ul>
      </main>
      <footer>
        <Footer image={false}></Footer>
      </footer>
    </div>
  )
}

export default page