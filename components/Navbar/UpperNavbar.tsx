import React from 'react'
import logo from "@/assets/icons/logo.png";
import workinghours from "@/assets/icons/navbar-time.png";
import email from "@/assets/icons/navbar-mail.png";
import phone from "@/assets/icons/navbar-call.png";
const UpperNavbar = () => {
  return (
    <div className='bg-primary h-[160px] flex justify-between items-center px-32'>
        <img src={logo.src} alt="Transeek logo" />
    <ul className='flex gap-10'>
    <li className='flex items-center gap-4'>
        <img className='w-[70px]' src={workinghours.src} alt="working hours" />
        <h1 className='text-white'>Mon - Sat 9.00 - 18.00</h1>
    </li>
    <li className='flex items-center gap-4'>
        <img className='w-[70px]' src={email.src} alt="working hours" />
        <h1 className='text-white'>contact@logistics.com</h1>
    </li>
    <li className='flex items-center gap-4'>
        <img className='w-[70px]' src={phone.src} alt="working hours" />
        <h1 className='text-white'>(00) 112 365 489</h1>
    </li>
    </ul>
    </div> 
  )
}

export default UpperNavbar