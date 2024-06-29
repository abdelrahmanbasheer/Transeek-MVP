'use client'
import Navbar from '@/components/Navbar/Navbar'
import PagesNavbar from '@/components/Navbar/PagesNavbar'
import React, { useEffect, useState } from 'react'
import logo from "@/assets/icons/maersk.png";
import blueIcon from "@/assets/icons/shipping-logo-1.png";
import orangeIcon from "@/assets/icons/shipping-logo-2.png";
import shipIcon from "@/assets/icons/shipping-logo-3.png";
import Footer from '@/components/Footer';
import sea  from "@/assets/icons/sea.png"
import search from "@/assets/icons/search.png"
import Link from 'next/link';

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type shipmentType ={
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
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [date, setDate] = React.useState<Date>()
    // const data:shipmentType=[
    //     {
    //         id:1232,
    //         origin:"Los Angeles",
    //         dateOfDispatch:"4/1/2024",
    //         timeToShip:4,
    //         dateOfArrival:"8/1/2024",
    //         price:2000,
    //         destination:"brussels",
    //         weight:200,
  
  
    //     }
    // ]
    const [allShipments, setAllShipments] = useState<shipmentType>([])

  useEffect(() => {
    const fetchWarehouses = async () => {
      
        const response = await fetch('http://localhost:3000/api/shipments');
        const data = await response.json();
        setAllShipments(data);
        setShipments(data);
    }
    fetchWarehouses();
  }, []);
  const [shipements, setShipments] = useState<shipmentType>([])
  const handleSearch = () => {
    const filteredData = allShipments.filter((item) => {
      const itemDate = new Date(item.dateOfDispatch);
      const originMatches = origin ? item.origin.toLowerCase().includes(origin.toLowerCase()) : true;
      const destinationMatches = destination ? item.destination.toLowerCase().includes(destination.toLowerCase()) : true;
      const dateMatches = date ? itemDate.toDateString() === date.toDateString() : true;

      return originMatches && destinationMatches && dateMatches;
    });

    setShipments(filteredData);
  };
    console.log(shipements[0]?.origin)
  return (
    <div>
      <nav>
      <Navbar></Navbar>
      <PagesNavbar title={"Get Shipment"}></PagesNavbar>
      </nav>
      <main>
            <div className=' bg-white bg-opacity-60 px-[20%]  mt-14 relative '>
    <ul className='flex gap-5'>
    <li className='flex '>
        <img className='rounded-full mr-2' src={sea.src} alt="" />
    <h1 className='font-bold text-lg '>Shipments</h1> 
    </li>
    </ul>
<div className='mt-5 uppercase ml-1 text-[#454545] flex relative'>
    <p >Journey</p>
    <p className='absolute left-[21%]'>Origin</p>
    <p className='absolute left-[55%]'>Destination</p>
    </div>
    <div className='w-[1100px] h-[60px]  bg-white flex'>
    <ul className='flex items-center ml-4 gap-2'>
    <li className='bg-black bg-opacity-20 rounded-xl'>
        <img className={`hover:cursor-pointer`} src={sea.src}  alt="" />
    </li>
    </ul>
    <input className="ml-7 bg-gray-50 border border-gray-300 text-gtext text-sm rounded-lg focus:outline-none block w-[300px] h-[40px] my-auto p-2.5 " type="text"
     value={origin} onChange={(e)=>{setOrigin(e.target.value)}}/>
    <input className="ml-7 bg-gray-50 border border-gray-300 text-gtext text-sm rounded-lg focus:outline-none block w-[300px] h-[40px] my-auto p-2.5 " type="text"
     value={destination} onChange={(e)=>{setDestination(e.target.value)}}/>
     <div className='my-auto ml-4'>
     <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
     </div>
   
    <div className='my-auto'>
      
  <img onClick={()=>{
handleSearch()
  }} className='my-auto ml-8 h-[35px] hover:cursor-pointer' src={search.src}></img>
    </div>
    </div>
    </div>
        <div className='my-16'>
        <h1 className='font-bold text-center text-primary text-4xl mt-4'>Shipments</h1>
     </div>
     <div className='mt-5'>
    <ul className='flex flex-col gap-[40px] items-center'>
        {
            shipements?.map((item)=>(
                <li key={item.id} className='w-[1200px] h-[288px] gap-[73px] flex'>
        <div className='w-[840px]'>
            <div className='flex justify-between'>
        <img src={logo.src} alt="" />
        <h1 className='font-bold text-[#000000] text-2xl text-opacity-60'>ID : {item.id}</h1>
        </div>
        <div className='p-10 '>
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
        <div className='flex flex-col'>
            <h4 className='font-bold'>OVERDUE 2023-12-31</h4>
            <h4 className='font-bold'>ID {item.id}</h4>
            <h4 className='font-bold'>{item.weight} kg </h4>
            <Link href={`/checkout/${item.id}`}>
            <p className='p-1 bg-primary text-white w-[187px] font-bold h-[56px] text-center  my-3 rounded-lg'>{item.price}$ <br />request</p>
            </Link>
        </div>
        </li>
            ))
        }
        
    </ul>
     </div>
    </main>
    <footer>
        <Footer image={false}></Footer>
    </footer>
    </div>
  )
}

export default page  