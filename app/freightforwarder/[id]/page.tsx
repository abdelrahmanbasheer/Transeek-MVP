'use client'
import Footer from '@/components/Footer'
import LowerNavbar from '@/components/Navbar/LowerNavbar'
import Navbar from '@/components/Navbar/Navbar'
import { useParams } from 'next/navigation'
import React, {useEffect, useState } from 'react'
import tester from "@/assets/images/warehouse-page-test.png"
type shipmentType ={
  companyName:string,
  country:string,
  experience:string,
  email:string,
  phoneNumber:string,
}
const page = () => {
 const {id} =useParams()
  const [allShipments, setAllShipments] = useState<shipmentType>()
  useEffect(() => {
    const fetchWarehouses = async () => {
      
        const response = await fetch(`http://localhost:3000/api/freight-forwarders/${id}`);
        const data = await response.json();
        setAllShipments(data);
    }
    fetchWarehouses();
  }, []);
  return (
    <div>
        <Navbar></Navbar>
        <LowerNavbar></LowerNavbar>
        <li className='grid grid-cols-2  border-t-2 p-3'>
          <img className='border-r-2 px-5 border-gray-100' src={tester.src} alt="" />
          <div className='flex flex-col ml-5 gap-3'>
          <h1 className='font-bold text-left text-primary text-2xl mt-4'>{allShipments?.companyName}</h1>
          <p className='text-#666C89 font-medium mt-5 text-sm opacity-70'>We are dedicated to creating added value <br /> for our customers by implementing modern <br /> technology in our operations.</p>
          <ul  className='marker:text-primary list-disc pl-5' role='list'>
          <li className='font-semibold'>
         location : {allShipments?.country}
          </li>
          <li className='font-semibold'>
          Years of experience: {allShipments?.experience} units
          </li>
          <li className='font-semibold'>
          Security: 24/7 surveillance, access control
          </li>
          <li className='font-semibold'>
          email: {allShipments?.email}
          </li>
          <li className='font-semibold'>
          phone number: {allShipments?.phoneNumber}
          </li>
          </ul>
          {/* <p className='p-4 bg-primary text-white w-[125px] h-[47px] text-center pb-10 mt-5 rounded-lg'>Contact</p> */}
          </div>
          </li>
        <footer>
          <Footer image={false}></Footer>
        </footer>
    </div>
  )
}

export default page