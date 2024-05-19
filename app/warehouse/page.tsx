import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import header from "@/assets/images/warehouse-page-header.png"
import tester from "@/assets/images/warehouse-page-test.png"
import PagesNavbar from '@/components/Navbar/PagesNavbar'
const page = () => {
  return (
    <div>
        <nav>
      <Navbar></Navbar>
      <PagesNavbar title={"warehouse"}></PagesNavbar>
      </nav>
      <main >
        <div className='my-16'>
        <img className='mx-auto' src={header.src} alt="" />
        <h1 className='font-bold text-center text-primary text-4xl mt-4'>Warehouse</h1>
        </div>
    <ul className='flex flex-col gap-6 mx-[300px] last:mb-10'>
    <li className='grid grid-cols-2  border-t-2 p-3'>
    <img className='border-r-2 px-5 border-gray-100' src={tester.src} alt="" />
    <div className='flex flex-col ml-5 gap-3'>
    <h1 className='font-bold text-left text-primary text-2xl mt-4'>Warehouse</h1>
    <p className='text-#666C89 font-medium mt-5 text-sm opacity-70'>We are dedicated to creating added value <br /> for our customers by implementing modern <br /> technology in our operations.</p>
    <ul  className='marker:text-primary list-disc pl-5' role='list'>
    <li className='font-semibold'>
    Location: 123 Main Street, Cityville  
    </li>
    <li className='font-semibold'>
    Capacity: 10,000 sq. ft.
    </li>
    <li className='font-semibold'>
    Inventory: 5,000 units
    </li>
    <li className='font-semibold'>
    Security: 24/7 surveillance, access control
    </li>
    </ul>
    <p className='p-4 bg-primary text-white w-[125px] h-[47px] text-center pb-10 mt-5 rounded-lg'>Contact</p>
    </div>
    </li>
    <li className='grid grid-cols-2  border-t-2 p-3'>
    <img className='border-r-2 px-5 border-gray-100' src={tester.src} alt="" />
    <div className='flex flex-col ml-5 gap-3'>
    <h1 className='font-bold text-left text-primary text-2xl mt-4'>Warehouse</h1>
    <p className='text-#666C89 font-medium mt-5 text-sm opacity-70'>We are dedicated to creating added value <br /> for our customers by implementing modern <br /> technology in our operations.</p>
    <ul  className='marker:text-primary list-disc pl-5' role='list'>
    <li className='font-semibold'>
    Location: 123 Main Street, Cityville  
    </li>
    <li className='font-semibold'>
    Capacity: 10,000 sq. ft.
    </li>
    <li className='font-semibold'>
    Inventory: 5,000 units
    </li>
    <li className='font-semibold'>
    Security: 24/7 surveillance, access control
    </li>
    </ul>
    <p className='p-4 bg-primary text-white w-[125px] h-[47px] text-center pb-10 mt-5 rounded-lg'>Contact</p>
    </div>
    </li>
    <li className='grid grid-cols-2  border-t-2 p-3'>
    <img className='border-r-2 px-5 border-gray-100' src={tester.src} alt="" />
    <div className='flex flex-col ml-5 gap-3'>
    <h1 className='font-bold text-left text-primary text-2xl mt-4'>Warehouse</h1>
    <p className='text-#666C89 font-medium mt-5 text-sm opacity-70'>We are dedicated to creating added value <br /> for our customers by implementing modern <br /> technology in our operations.</p>
    <ul  className='marker:text-primary list-disc pl-5' role='list'>
    <li className='font-semibold'>
    Location: 123 Main Street, Cityville  
    </li>
    <li className='font-semibold'>
    Capacity: 10,000 sq. ft.
    </li>
    <li className='font-semibold'>
    Inventory: 5,000 units
    </li>
    <li className='font-semibold'>
    Security: 24/7 surveillance, access control
    </li>
    </ul>
    <p className='p-4 bg-primary text-white w-[125px] h-[47px] text-center pb-10 mt-5 rounded-lg'>Contact</p>
    </div>
    </li>
    <li className='grid grid-cols-2  border-t-2 p-3'>
    <img className='border-r-2 px-5 border-gray-100' src={tester.src} alt="" />
    <div className='flex flex-col ml-5 gap-3'>
    <h1 className='font-bold text-left text-primary text-2xl mt-4'>Warehouse</h1>
    <p className='text-#666C89 font-medium mt-5 text-sm opacity-70'>We are dedicated to creating added value <br /> for our customers by implementing modern <br /> technology in our operations.</p>
    <ul  className='marker:text-primary list-disc pl-5' role='list'>
    <li className='font-semibold'>
    Location: 123 Main Street, Cityville  
    </li>
    <li className='font-semibold'>
    Capacity: 10,000 sq. ft.
    </li>
    <li className='font-semibold'>
    Inventory: 5,000 units
    </li>
    <li className='font-semibold'>
    Security: 24/7 surveillance, access control
    </li>
    </ul>
    <p className='p-4 bg-primary text-white w-[125px] h-[47px] text-center pb-10 mt-5 rounded-lg'>Contact</p>
    </div>
    </li>
    </ul>
      </main>
      <footer>
        <Footer image={false}></Footer>
      </footer>
    </div>
  )
}

export default page