'use client'
import Footer from '@/components/Footer'
import LowerNavbar from '@/components/Navbar/LowerNavbar'
import Navbar from '@/components/Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import search from "@/assets/icons/search.png"
import Link from 'next/link'
import { useUserStore } from '@/lib/useUserStore'
import subscribed from "@/assets/images/subscribed.png"
type shipmentType ={
    id:number,
    companyName:string,
    country:string,
    experience:string,
    email:string,
    phoneNumber:string,
    isSubscribed?:boolean
}[]
const SearchExp = () => {
    const user = useUserStore((state) => state.user);
    const [productType, setProductType] = useState("")
    const [origin, setOrigin] = useState("")
    const forwarder={
    id:1,
    }
const [allShipments, setAllShipments] = useState<shipmentType>([])

useEffect(() => {
  const fetchWarehouses = async () => {
    
      const response = await fetch('http://localhost:3000/api/freight-forwarders');
      const data = await response.json();
      setAllShipments(data);
      setShipments(data);
  }
  fetchWarehouses();
}, []);
const [shipements, setShipments] = useState<shipmentType>([])
const handleSearch = (productType: string, origin: string) => {
    const normalizedProductType = productType.toLowerCase().trim();
    const normalizedOrigin = origin.toLowerCase().trim();

    setShipments(allShipments.filter(({  country }) =>
    
        country.toLowerCase().includes(normalizedOrigin)
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
        {
        user?.isSubscribed 
        ?
        <div>
        <ul className=' flex  flex-col items-center mt-10 gap-5'>
{
shipements.map((item)=>(
 <Link href={`/freightforwarder/${item.id}`}>
      {
        item.isSubscribed &&
 <li className='flex gap-5 w-[750px] h-[88px] p-5 rounded-xl bg-[#EBEBEB] relative'>
     <p>Name: {item.companyName}</p>
     <p>Years of Experience: {item.experience}</p>
     <p>Port of Origin: {item.country}</p>
        <img className='absolute w-[50px] left-[90%] top-[10%]' src={subscribed.src} alt="" />
     
 </li>
}
 </Link>

))
}
</ul>
 </div>
        :
        
        <p className='text-center'>Subscribe to Search for FreightForwarders</p>
    }


        <footer className='mt-[300px]'>
            <Footer image={true}></Footer>
        </footer>
    </div>
  )
}

export default SearchExp