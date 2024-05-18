'use client'
import React from 'react'
import logo from "@/assets/icons/logoXL.png";
import { useForm } from 'react-hook-form';
const page = () => {
    interface IFormInput {
        email: string;
        password: string;
      }
    const { register, handleSubmit } = useForm();

  return (
    <div className='flex'>
        <img src="./login-page-bg.png" className='h-screen' alt="" />
        <div className='flex flex-col mt-10 w-[500px]  mx-auto'>
            <img src={logo.src} className='w-[609px] mt-10 ' alt="" />
            <h1 className='text-[#313131] text-4xl font-bold mt-[130px] '>Login</h1>
            <h1 className='text-[#313131] text-sm my-3 '>Login to access your travelwise  account</h1>
            <form className='relative flex flex-col gap-5'>
            <label className='text-[#313131] text-sm z-50 left-5 top-[-10px] bg-white absolute'>Email</label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[512px] h-[56px] outline-none' {...register("email")} />
            <label className='text-[#313131] text-sm z-50 left-5 top-[65px] bg-white absolute'>Password</label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[512px] h-[56px] outline-none' {...register("password")} />
            <div className='text-center mt-3 text-sm font-semibold text-[#312e33] flex justify-between ml-2'>Remember me<span className='text-[#353d92] font-semibold'><a href="/forgetPassword">Forgot Password</a></span></div>
            <button className='w-[512px] bg-[#515DEF] rounded-md p-4 text-white mt-10' type="submit">Login</button>
            
            <p className='text-center mt-3 text-sm font-semibold'>Don't have an account? <span className='text-[#353d92] font-bold'><a href="/signup">Sign up</a></span></p>
            </form>
        </div>
    </div>
  )
}

export default page