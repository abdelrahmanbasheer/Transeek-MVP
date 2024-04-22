import React from 'react'
import socials from "@/assets/icons/navbar-socials.png";
const LowerNavbar = () => {
  return (
    <div className='px-36 flex justify-between bg-[#091242] bg-opacity-35 h-[80px] items-center text-white text-lg'>
      <ul className='flex gap-14'>
      <li className=''>
        <h1 className='hover:text-primary hover:brightness-200 cursor-pointer'>Home</h1>
      </li>
      <li>
        <h1  className={`nav border-white relative after:border-l-2 hover:text-primary hover:brightness-200 cursor-pointer`}>About</h1>
      </li>
      <li>
        <h1 className={`nav border-white relative after:border-l-2 hover:text-primary hover:brightness-200 cursor-pointer`}>Pages </h1>
      </li>
      <li>
        <h1 className={`nav border-white relative after:border-l-2 hover:text-primary hover:brightness-200 cursor-pointer `}>Project</h1>
      </li>
      <li>
        <h1  className={`nav border-white relative after:border-l-2 hover:text-primary hover:brightness-200 cursor-pointer `}>Contact</h1>
      </li>
      <li className='ml-14 '>
        <img className='w-[170px]' src={socials.src} alt="" />
      </li>
      </ul>
    <ul className='flex gap-10 '>
      <li className='p-[22px] w-[200px] h-[80px] text-center bg-primary cursor-pointer'> 
        <h1>Subscribe</h1>
      </li>
      <li className='p-[20px] w-[200px] h-[80px] text-center font-semibold text-black bg-white cursor-pointer'> 
        <h1 >Get Started</h1>
      </li>
    </ul>
    </div>
  )
}

export default LowerNavbar