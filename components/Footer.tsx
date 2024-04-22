import React from 'react'
import heroImg from "@/assets/images/footer-image.png"
import logo from "@/assets/icons/logo.png"
import email from "@/assets/icons/navbar-mail.png";
import phone from "@/assets/icons/navbar-call.png";
import socials from"@/assets/icons/navbar-socials.png"
const Footer = () => {
  return (
    <div>
    <img className='w-[100%]' src={heroImg.src} alt="" />
    <div className='h-[567px] bg-[#091242]'>
    <div className='h-[117px] bg-white bg-opacity-5 flex pr-[400px] justify-center items-center gap-28'>
      <div className='bg-[#091242] w-[500px] h-[117px]'>
      <img className='p-10'  src={logo.src} alt="" />
      </div>
      <h1 className='text-white text-xl font-semibold'>Pages</h1>
      <h1 className='text-white text-xl font-semibold'>Utility</h1>
      <h1 className='text-white text-xl font-semibold'>Subscribe</h1>
    </div>
    <div className='flex text-white pl-36 pt-20 '>
    <ul className='flex flex-col gap-5 mr-[200px]'>
    <li className=''>
      <p>Leverage agile frameworks to provide a <br /> robust synopsis for strategy  collaborative <br /> thinking to further the overall value <br /> proposition.</p>
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
  {/* first list */}

    <ul className='flex flex-col  gap-5 '>
    <li className=''>
    <h1 className='text-white hover:text-secondary cursor-pointer'>About us</h1>
    </li>
    <li className='flex items-center gap-4'>
      <h1 className='text-white hover:text-secondary cursor-pointer'>Our team</h1>
    </li>
    <li className='flex items-center gap-4'>
        <h1 className='text-white hover:text-secondary cursor-pointer'>Our projects</h1>
    </li>
    <li className='flex items-center gap-4'>
        <h1 className='text-white hover:text-secondary cursor-pointer'>Pricing</h1>
    </li>
    <li className='flex items-center gap-4'>
        <h1 className='text-white hover:text-secondary cursor-pointer'>Contact</h1>
    </li>
    </ul>
{/* second list */}
    <ul className='flex flex-col gap-5 ml-[100px]'>
    <li className=''>
    <h1 className='text-white hover:text-secondary cursor-pointer'>Style Guide</h1>
    </li>
    <li className='flex items-center gap-4'>
      <h1 className='text-white hover:text-secondary cursor-pointer'>Changelog</h1>
    </li>
    <li className='flex items-center gap-4'>
        <h1 className='text-white hover:text-secondary cursor-pointer'>Licenses</h1>
    </li>
    <li className='flex items-center gap-4'>
        <h1 className='text-white hover:text-secondary cursor-pointer'>Protected</h1>
    </li>
    <li className='flex items-center gap-4'>
        <h1 className='text-white hover:text-secondary cursor-pointer'>Not Found</h1>
    </li>
    </ul>
{/* third list */}
    <ul className='flex flex-col  gap-5 ml-[100px]'>
    <li className='flex items-center gap-4'>
     <input placeholder='write your E-mail here' className="bg-transparent border border-gray-300 text-gtext text-sm  focus:outline-none block w-[220px] h-[60px] my-auto p-5 " type="text" />
    </li>
    <li className='flex items-center justify-center gap-4'>
    <button className=' p-4 bg-secondary text-white w-[200px] text-center mt-5 '>Send Now</button>
    <img className='mt-5' src={socials.src}></img>
    </li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default Footer