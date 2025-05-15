
import React from 'react'
import logo from "@/assets/icons/logoXL.png";
import Link from 'next/link';
const Signup = () => {
       return (
    <div className='flex'>
        <img src=".././login-page-bg.png" className='h-screen' alt="" />
        <div className='flex flex-col mt-10 w-[500px]  mx-auto'>
            <img src={logo.src} className='w-[609px] ' alt="" />
            <h1 className='text-[#313131] text-4xl font-bold mt-6'>Sign up</h1>
            <h1 className='text-[#313131] text-sm my-3 '>Let's get you all set up so you can access your personal account.</h1>
            <Link href={"/signup/exporter"}>
            <button className='w-[512px] bg-[#515DEF] rounded-md p-4 text-white mt-2' type="submit">Exporter</button>
            </Link>
            <Link href={"/signup/freightforwarder"}>
            <button className='w-[512px] bg-[#515DEF] rounded-md p-4 text-white mt-2' type="submit">Freight-Forwarder</button>
            </Link>
            <p className='text-center mt-3 text-sm font-semibold'>Already have an account?<span className='text-[#353d92] font-bold'><a href="/login"> Login </a></span></p>
        </div>
    </div>
  )
}

export default Signup