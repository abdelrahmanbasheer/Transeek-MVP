'use client'
import Footer from '@/components/Footer'
import LowerNavbar from '@/components/Navbar/LowerNavbar'
import Navbar from '@/components/Navbar/Navbar'
import React, { useState } from 'react'

const page = () => {
    const [country, setCountry] = useState(''); 
    const [city, setCity] = useState(''); 
    const [yearsOfExperience, setYearsOfExperience] = useState(0); 
    const [productType, setProductType] = useState('');
  return (
    <div>
        <nav>
        <Navbar></Navbar>
        <LowerNavbar></LowerNavbar>
        </nav>
        <ul className='flex justify-center mt-[150px] mx-[300px] gap-10 flex-wrap'>
            <li className='flex flex-col gap-2  '>
        <label className='text-[#878787] font-semibold'>productType</label>
    <input type="text" value={productType} onChange={(e)=>setProductType(e.target.value)} className='bg-gray-200 w-[400px] pl-4 h-[40px] rounded-lg'/>
            </li>
            <li className='flex flex-col gap-2'>
        <label className='text-[#878787] font-semibold'>Country</label>
    <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} className='bg-gray-200 w-[400px] pl-4 h-[40px] rounded-lg'/>
            </li>
            <li className='flex flex-col gap-2'>
                <button className='bg-primary text-white rounded-lg w-[400px] h-[40px]'>Add</button>
            </li>

        </ul>
<footer className='mt-[300px]'>
    <Footer image={true}></Footer>
</footer>
    </div>
  )
}

export default page