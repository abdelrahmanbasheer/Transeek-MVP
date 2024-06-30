'use client'
import Footer from '@/components/Footer'
import LowerNavbar from '@/components/Navbar/LowerNavbar'
import Navbar from '@/components/Navbar/Navbar'
import { useParams } from 'next/navigation'
import blueIcon from "@/assets/icons/shipping-logo-1.png";
import orangeIcon from "@/assets/icons/shipping-logo-2.png";
import shipIcon from "@/assets/icons/shipping-logo-3.png";
import React, { useEffect, useState } from 'react'
import logo from "@/assets/icons/maersk.png";
import AcenterPlaceholder from "@/assets/images/AcenterPlaceholder.png"
type shipmentType ={
    companyName:string,
    country:string,
    experience:string,
    email:string,
    phoneNumber:string,
  }
  type shipmentsType ={
    id:number,
    origin:string,
    destination:string,
    dateOfDispatch:string,
    timeToShip:number,
    price:number,
    weight:number,
    dateOfArrival:string,
    }[]
const page = () => {
    const id =5
    const [allShipments, setAllShipments] = useState<shipmentType>()
    const [shipments, setShipments] = useState<shipmentsType>()
    useEffect(() => {
      const fetchWarehouses = async () => {
        
          const response = await fetch(`http://localhost:3000/api/freight-forwarders/${id}`);
          const data = await response.json();
          setAllShipments(data);
      }
      const fetchShipments = async () => {
      
        const response = await fetch('http://localhost:3000/api/shipments');
        const data = await response.json();
        setShipments(data);
    }
    fetchShipments();
      fetchWarehouses();
    }, []);
  return (
    <div>
         <Navbar></Navbar>
        <LowerNavbar></LowerNavbar>
        <div className='flex m-[50px] h-screen gap-16'>
            <div className="flex flex-col items-center ">
             <img className='' src={AcenterPlaceholder.src} alt="" />
                <h1 className='text-4xl font-bold mt-6 '>{allShipments?.companyName}</h1>
                <h1 className='text-xl font-semibold mt-6 '>{allShipments?.email}</h1>
            </div>
            <div className="flex flex-col border-[#C9C9C9] border-[1px] w-[1007px] h-[700px] p-10">
                <h1 className='text-4xl font-bold  '>My Shipments :</h1>
                <ul className='flex flex-col gap-[40px] mt-16 justify-center '>
        {
            shipments?.map((item)=>(
                <li key={item.id} className='w-[1200px] h-[288px] gap-[73px] flex'>
        <div className='w-[840px]'>
            <div className='flex justify-between'>
        <img src={logo.src} alt="" />
        <h1 className='font-bold text-[#000000] text-2xl text-opacity-60'>ID : {item.id}</h1>
        </div>
        <div className='p-10'>
        <ul className='flex self-center justify-between items-center'>
 
            <li className='flex flex-col relative'>
            <hr  className='w-[700px] h-[1px] bg-[#D0D5DD] z-[-50] top-[35px] absolute border-0'/>
            <h1 className='text-primary'>{item.origin}</h1>
            <img src={blueIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085]'>{item.dateOfDispatch.split('T')[0]}</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Shipped</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>{item.dateOfDispatch.split('T')[0]}</p>
            </li>
            <li className='flex flex-col'>
            <p className='text-[#667085] pb-1'>{item.timeToShip} days</p>
            <img src={shipIcon.src} className='w-[40px] h-[40px]  mx-auto' alt="" />
          
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>{item.destination}</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085] '>{item.dateOfArrival.split('T')[0]}</p>
            </li>
        </ul>
        </div>
        </div>
        </li>
            ))
        }
        
    </ul>
            </div>
            </div>
        <footer>
            <Footer image={true}></Footer>
        </footer>
    </div>
  )
}

export default page