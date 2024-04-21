import React from 'react'
import box from "@/assets/icons/Pattern.png"
const Advert = () => {
  return (
    <ul className='mt-10 flex justify-center mx-[350px] p-10 border-b-2 mb-10 border-t-2 gap-[200px]'>
       <li className='flex gap-3 items-center'>
     <p className='text-4xl text-primary font-bold'>1294</p>
<img className='w-[17px] h-[17px]' src={box.src} alt="" />
    <p className='text-base text-primary font-medium'>Delivered Packages</p>
       </li>
       <li className='flex gap-3 items-center border-black'>
     <p className='text-4xl text-primary font-bold'>3594</p>
<img className='w-[17px] h-[17px]' src={box.src} alt="" />
    <p className='text-base text-primary font-medium'>Satisfied Clients</p>
       </li>
   
    </ul>
  )
}

export default Advert