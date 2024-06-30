
import React from 'react'
import Link from 'next/link';
const LowerNavbar = () => {

  return (
    <div className='px-36 flex justify-between bg-[#091242] bg-opacity-35 h-[80px] items-center text-white text-lg'>
      <ul className='flex gap-14'>
      <Link href={"/"}>
      <li className=''>
        <h1 className='hover:text-secondary hover:brightness-200 cursor-pointer'>Home</h1>
      </li>
      </Link>
      <Link href={"/pricing"}>
      <li>
        <h1  className={`nav border-white relative after:border-l-2 hover:text-secondary hover:brightness-200 cursor-pointer`}>Pricing</h1>
      </li>
      </Link>
      <Link href={"/warehouse"}>
      <li>
        <h1 className={`nav border-white relative after:border-l-2 hover:text-secondary hover:brightness-200 cursor-pointer`}>Warehouses</h1>
      </li>
      </Link>
      <Link href={"/shipments"}>
      <li>
        <h1 className={`nav border-white relative after:border-l-2 hover:text-secondary hover:brightness-200 cursor-pointer `}>Shipments</h1>
      </li>
      </Link>
      <Link href={"/trucks"}>
      <li>
        <h1  className={`nav border-white relative after:border-l-2 hover:text-secondary hover:brightness-200 cursor-pointer `}>Trucks</h1>
      </li>
      </Link>
      
      </ul>
    <ul className='flex gap-10'>
   
    </ul>
    </div>
  )
}

export default LowerNavbar