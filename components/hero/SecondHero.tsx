import React from 'react'
import header from "@/assets/images/second-hero-header.png"
import heroImg from "@/assets/images/second-hero-image.png"
import box from "@/assets/icons/second-hero-box.png"
import cash from "@/assets/icons/second-hero-cash.png"
const SecondHero = () => {
  return (
    <div className='relative'>
    <div className='bg-white w-[1200px] shadow-md h-[600px] top-[22rem] left-[200px] 2xl:left-[300px] absolute px-32 pt-24 grid grid-cols-2 gap-6'>
        <div className='flex flex-col'>
        <img className='h-[23px] w-[72px]' src={header.src} alt="" />
        <h1 className='font-bold text-primary text-4xl mt-4'>We provide full range global logistics solutions</h1>
        <p className='text-#666C89 font-medium mt-5 text-sm opacity-70'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
        <p className='text-#666C89 font-medium mt-5 text-sm opacity-70'>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. </p>
        <div className='flex items-center mt-5 gap-2'>
        <img src={box.src} alt="" />
        <h1 className='text-primary font-semibold text-xl'>Delivery on Time</h1>
        </div>
        <div className='flex items-center mt-5 gap-2'>
        <img src={cash.src} alt="" />
        <h1 className='text-primary font-semibold text-xl'>Optimized Travel Cost</h1>
        </div>
        </div>
    <img className='w-[480px] h-[440px]' src={heroImg.src} alt="" />
    </div>
    </div>
  )
}

export default SecondHero