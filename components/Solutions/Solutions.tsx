import React from 'react'
import SolutionsHeader from "@/assets/images/solutions-header.png"
import truck from "@/assets/icons/hero-flex (1).png"
import ship from "@/assets/icons/hero-flex (2).png"
import warehouse from "@/assets/icons/hero-flex (3).png"
const Solutions = () => {
  return (
    <div className='relative'>
    <div className='px-36 flex mt-[90px] gap-10'>
    <div className=''>
    <img src={SolutionsHeader.src} alt="" />
    <p className='font-bold text-primary text-4xl mt-4'>Safe & Reliable <br /> Cargo Solutions</p>
    </div>
    <ul className='grid grid-cols-2 gap-14'>
    <li className='flex gap-10'>
        <img src={ship.src} className='w-[55px] h-[55px]' alt="" />
        <div className='sol flex-col relative flex gap-5 before:border-l-2 ml-5'>
        <h1 className='text-primary font-medium text-3xl'>Sea Transport Services</h1>
        <p className='text-#666C89 font-medium text-lg opacity-70'>Following the quality of our service <br /> thus having gained trust of our <br /> many clients.</p>
        </div>
    </li>
    <li className='flex gap-10'>
        <img src={warehouse.src} className='w-[55px] h-[55px]' alt="" />
        <div className='sol flex-col flex relative gap-5 before:border-l-2 ml-5'>
        <h1 className='text-primary font-medium text-3xl'>Warehousing Services</h1>
        <p className='text-#666C89 font-medium  text-lg opacity-70'>Following the quality of our service <br /> thus having gained trust of our <br /> many clients.</p>
        </div>
    </li>
    <li className='flex gap-10'>
        <img src={truck.src} className='w-[55px] h-[55px]' alt="" />
        <div className='sol flex-col flex relative gap-5 before:border-l-2 ml-5'>
        <h1 className='text-primary font-medium text-3xl'>Networking Services</h1>
        <p className='text-#666C89 font-medium  text-lg opacity-70'>Following the quality of our service <br /> thus having gained trust of our <br /> many clients.</p>
        </div>
    </li>
    <li className='flex gap-10'>
        <img src={truck.src} className='w-[55px] h-[55px]' alt="" />
        <div className='sol flex-col flex relative gap-5 before:border-l-2 ml-5'>
        <h1 className='text-primary font-medium text-3xl'>Local Shipping Services</h1>
        <p className='text-#666C89 font-medium  text-lg opacity-70'>Following the quality of our service <br /> thus having gained trust of our <br /> many clients.</p>
        </div>
    </li>
    </ul>
    </div>
    <h1 className='text-center text-primary font-extrabold text-4xl mt-[200px]'>We've Assisted Clients in Saving Over 50,000 Work Hours <br /> Streamlining Their Search for Optimal Quotations.</h1>
    </div>
  )
}

export default Solutions