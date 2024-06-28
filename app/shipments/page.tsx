import Navbar from '@/components/Navbar/Navbar'
import PagesNavbar from '@/components/Navbar/PagesNavbar'
import React from 'react'
import logo from "@/assets/icons/maersk.png";
import blueIcon from "@/assets/icons/shipping-logo-1.png";
import orangeIcon from "@/assets/icons/shipping-logo-2.png";
import shipIcon from "@/assets/icons/shipping-logo-3.png";
import Footer from '@/components/Footer';

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
    
    const data:shipmentType=[
        {
            id:1232,
            origin:"Los Angeles",
            dateOfDispatch:"1/1/2024",
            timeToShip:4,
            dateOfArrival:"4/1/2024",
            price:2000,
            destination:"brussels",
            weight:200,


        }
    ]
    
  return (
    <div>
      <nav>
      <Navbar></Navbar>
      <PagesNavbar title={"Get Shipment"}></PagesNavbar>
      </nav>
      <main>
        <div className='my-16'>
        <h1 className='font-bold text-center text-primary text-4xl mt-4'>Shipments</h1>
     </div>
     <div className='mt-5'>
    <ul className='flex flex-col gap-[40px] items-center'>
        {
            data.map((item)=>{
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
            <p className='text-[#667085]'>{item.dateOfDispatch}</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Shipped</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>{item.dateOfArrival}</p>
            </li>
            <li className='flex flex-col'>
            <p className='text-[#667085] pb-1'>{item.timeToShip}</p>
            <img src={shipIcon.src} className='w-[40px] h-[40px]  mx-auto' alt="" />
          
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Out Fee</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>{item.dateOfArrival}</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>P{item.destination}</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085] '>{item.dateOfArrival}</p>
            </li>
        </ul>
        </div>
        </div>
        <div className='flex flex-col'>
            <h4 className='font-bold'>OVERDUE 2023-12-31</h4>
            <h4 className='font-bold'>ID {item.id}</h4>
            <h4 className='font-bold'>{item.weight} kg C02</h4>
            <p className='p-1 bg-primary text-white w-[187px] font-bold h-[56px] text-center  my-3 rounded-lg'>{item.price}$ <br /> request</p>
            <h4 className='font-bold text-[#000000] text-opacity-60'>View Details</h4>
        </div>
        </li>
            })
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