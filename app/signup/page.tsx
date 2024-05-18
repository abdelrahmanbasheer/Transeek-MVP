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
            <img src={logo.src} className='w-[609px] ' alt="" />
            <h1 className='text-[#313131] text-4xl font-bold mt-6 '>Sign up</h1>
            <h1 className='text-[#313131] text-sm my-3 '>Let's get you all set up so you can access your personal account.</h1>
            <form className='flex flex-col gap-6'>
            <div className='flex gap-6 relative'>
            <label className='text-[#313131] z-50 left-5 top-[-10px] bg-white text-sm absolute'>First Name</label>
            <input  className='p-4 border-2  border-[#79747E] rounded-md w-[312px] h-[56px] outline-none' {...register("email")} />
            <label className='text-[#313131] text-sm z-50 left-[300px] top-[-10px] absolute bg-white'>Last Name</label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[312px] h-[56px] outline-none' {...register("email")} />
            </div>
            <div className='flex gap-6 relative'>
            <label className='text-[#313131] z-50 left-5 top-[-10px] bg-white text-sm absolute'>Email</label>
            <input  className='p-4 border-2  border-[#79747E] rounded-md w-[312px] h-[56px] outline-none' {...register("email")} />
            <label className='text-[#313131] text-sm z-50 left-[300px] top-[-10px] absolute bg-white'>Phone Number</label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[312px] h-[56px] outline-none' {...register("email")} />
            </div>
            <div className='flex flex-col gap-6 relative'>
            <label className='text-[#313131] text-sm  z-50 left-5 top-[-10px] absolute bg-white'>Password</label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[537px] h-[56px] outline-none' {...register("password")} />
            <label className='text-[#313131] text-sm  z-50 left-5 top-[70px] absolute bg-white'>Confirm password</label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[537px] h-[56px] outline-none' {...register("password")} />
            </div>
            <div className=' text-sm font-semibold text-[#312e33] flex flex-col ml-2'>
              <form className=''>
            <input className='' type="radio" id="option1" name="option" value="1"/>
            <label className='ml-3 mb-3'>Exporter</label><br />
            <input  type="radio" id="option2" name="option" value="2"/>
            <label className='ml-3 mt-3'>Freight forwarder</label>
                </form>
                <p className='mt-3'>By signing up, you agree to our <span className='text-[#353d92] font-bold'><a href="/terms">Terms of Service</a></span> and <span className='text-[#353d92] font-bold'><a href="/privacy">Privacy Policy</a></span></p>
            </div>
            <button className='w-[512px] bg-[#515DEF] rounded-md p-4 text-white mt-2' type="submit">Sign up</button>
            <p className='text-center mt-3 text-sm font-semibold'>Already have an account?<span className='text-[#353d92] font-bold'><a href="/login"> Login </a></span></p>
            </form>
        </div>
    </div>
  )
}

export default page