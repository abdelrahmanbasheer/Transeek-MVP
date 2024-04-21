import React from 'react'
import LowerNavbar from '../Navbar/LowerNavbar'
import heroHeader from "@/assets/images/hero-header.png"
const Hero = () => {
  return (
    <div className='bg-hero-image h-[900px] bg-cover bg-no-repeat'>
    <LowerNavbar></LowerNavbar>
    <div className='mt-[180px] px-36 text-white'>
       <img className='mb-10' src={heroHeader.src} alt="" />
       <p className='text-6xl font-bold leading-[70px]'>Your Gateway<br/>To any Destination<br />In the World</p>
       <p className='mt-2 opacity-90 tex'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ipsa repellat <br /> excepturi sit voluptate sunt pariatur quod fugiat? Tenetur, aperiam odio <br /> aliquid vero ut nostrum quasi commodi modi vel dolorem. <br /> </p>
    <p className='p-4 bg-secondary  w-[200px] text-center mt-5 rounded-xl'>Explore More</p>
    </div>
    </div>
  )
}

export default Hero