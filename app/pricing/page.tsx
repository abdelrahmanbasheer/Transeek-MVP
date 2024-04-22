import Footer from '@/components/Footer'
import LowerNavbar from '@/components/Navbar/LowerNavbar'
import Navbar from '@/components/Navbar/Navbar'
import header from "@/assets/images/pricing-page-header.png"
import correct from "@/assets/icons/pricing-page-true.png"
import wrong from "@/assets/icons/pricing-page-false.png"
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar></Navbar>
    <LowerNavbar></LowerNavbar>
    <main >
    <div className='mt-16'>
      <img className='mx-auto' src={header.src} alt="" />
      <h1 className='font-bold text-center text-primary text-4xl mt-4'>Our Best Pricing</h1>
    </div>
     <div className='flex justify-center gap-5 mb-28 mt-10'>
      <div className='w-[380px] h-[740px] bg-[#F4F4F4] '>
      <h1 className='text-7xl pt-20 pb-[100px] text-primary font-bold text-center'>Free</h1>
      <ul className='flex flex-col '>
    <li className='flex gap-3 justify-items-start border-t-2 p-5 mx-16 pl-10 items-center'>
    <img className='pb-2 ' src={correct.src} alt="" />
    <h1 className='text-primary'>Search shipment </h1>
    </li>
    <li className='flex gap-3 justify-items-start border-t-2  p-5 mx-16 pl-10 items-center'>
    <img className='pb-2' src={correct.src} alt="" />
    <h1 className='text-primary'>Trucking</h1>
    </li>
    <li className='flex gap-3 justify-items-start border-t-2 p-5 mx-16 pl-10 items-center'>
    <img className='pb-2' src={correct.src} alt="" />
    <h1 className='text-primary'>Warehousing </h1>
    </li>
    <li className='flex gap-3 justify-items-start border-t-2 border-b-2 pl-10 p-5 mx-16 items-center'>
    <img className='pb-2' src={wrong.src} alt="" />
    <h1 className='text-primary'>Get Sponsored </h1>
    
    </li>
    <li className='p-[20px] mx-auto mt-10 w-[200px] h-[80px] text-center font-semibold text-white pt-6 bg-primary cursor-pointer'> 
        <h1 >Choose Plan</h1>
      </li>
      </ul>
      </div>
      <div className='w-[380px] h-[740px] bg-primary'>
      <h1 className='text-6xl pt-24  pb-[100px] text-white font-bold text-center'>59$/month</h1>
      <ul className=' '>
    <li className='flex gap-3 justify-items-start border-t-2 p-5 mx-16 pl-10 items-center'>
    <img className='pb-2' src={correct.src} alt="" />
    <h1 className='text-white'>Search shipment </h1>
    </li>
    <li className='flex gap-3 justify-items-start border-t-2  p-5 mx-16 pl-10 items-center'>
    <img className='pb-2' src={correct.src} alt="" />
    <h1 className='text-white'>Trucking</h1>
    </li>
    <li className='flex gap-3 justify-items-start border-t-2 p-5 mx-16 pl-10 items-center'>
    <img className='pb-2' src={correct.src} alt="" />
    <h1 className='text-white'>Warehousing </h1>
    </li>
    <li className='flex gap-3 justify-items-start border-t-2 border-b-2 p-5 pl-10 mx-16 items-center'>
    <img className='pb-2' src={wrong.src} alt="" />
    <h1 className='text-white'>Get Sponsored </h1>
    </li>
    <li className='p-[20px] mx-auto mt-10 w-[200px] h-[80px] text-center font-semibold text-black pt-6 bg-gradient-to-br from-[#FFB629] to-[#fdd6a5] cursor-pointer'> 
        <h1 >Choose Plan</h1>
      </li>
      </ul>
      </div>
      </div> 
    </main>
    <footer>
    <Footer></Footer>
    </footer>
    </div>
  )
}

export default page