'use client'
import Footer from '@/components/Footer'
import LowerNavbar from '@/components/Navbar/LowerNavbar'
import Navbar from '@/components/Navbar/Navbar'
import React, { useState } from 'react'
import search from "@/assets/icons/search.png"
import Link from 'next/link'
const page = () => {
    const [productType, setProductType] = useState("")
    const [origin, setOrigin] = useState("")
    const forwarder={
    id:1,
    }
const data=[
    {
        type:"vegetables",
        origin:"egypt"
    },
    {
        type:"chemicals",
        origin:"germany"
    },
    {
        type:"cars",
        origin:"usa"
    
    }
]
const [filter, setFilter] = useState(data)
const handleSearch = (productType: string, origin: string) => {
    const normalizedProductType = productType.toLowerCase().trim();
    const normalizedOrigin = origin.toLowerCase().trim();

    setFilter(data.filter(({ type, origin }) =>
        type.toLowerCase().includes(normalizedProductType) &&
        origin.toLowerCase().includes(normalizedOrigin)
    ));
};
  return (
    <div className=''>
        <Navbar></Navbar>
        <LowerNavbar></LowerNavbar>
        <div className=' bg-white bg-opacity-60 px-[25%]  mt-14 relative '>
<div className='mt-5 uppercase ml-1 text-[#454545] flex'>
    <p className='ml-20'>Product type</p>
    <p className='ml-[250px]'>Origin</p>
    </div>
    <div className='w-[1100px] h-[60px]  bg-white flex'>
    <input className="ml-7 bg-gray-50 border border-gray-300 text-gtext text-sm rounded-lg focus:outline-none block w-[300px] h-[40px] my-auto p-2.5 " type="text"
     value={productType} onChange={(e)=>{setProductType(e.target.value)}}/>
    <input className="ml-7 bg-gray-50 border border-gray-300 text-gtext text-sm rounded-lg focus:outline-none block w-[300px] h-[40px] my-auto p-2.5 " type="text"
     value={origin} onChange={(e)=>{setOrigin(e.target.value)}}/>
    <div className='my-auto'>
  <img onClick={()=>{
handleSearch(productType,origin)
  }} className='my-auto ml-8 h-[35px] hover:cursor-pointer' src={search.src}></img>
    </div>
    </div>
    </div>
   <ul className=' flex  flex-col items-center mt-10 gap-5'>
{
    filter.map((item)=>(
        <Link href={`/freightforwarder/${forwarder.id}`}>
        <li className='flex gap-5 w-[550px] h-[88px] p-5 rounded-xl bg-[#EBEBEB]'>
            <p>Name: {item.origin}</p>
            <p>product type: {item.type}</p>
            <p>Port of Origin: {item.origin}</p>
        </li>
        </Link>
    
    ))
}
   </ul>
        <footer className='mt-[300px]'>
            <Footer image={true}></Footer>
        </footer>
    </div>
  )
}

export default page