'use client'
import React, { useState } from 'react'
import logo from "@/assets/icons/logoXL.png";
import { useForm } from 'react-hook-form';
import axios from "axios"
import img from "@/public/login-page-bg.png"
import { useRouter } from 'next/navigation';
const page = () => {
    interface IFormInput {
      email: string;
        password: string;
        username: string;
        country: string;
        companyName: string;
        phoneNumber: string;
        experience:string;
        
      }
    const { register, handleSubmit } = useForm<IFormInput>({
      defaultValues: {
        email:"",
        password:"",
        username:"",
        country:"",
        companyName:"",
        phoneNumber:"",
        experience:"",
      },
    });
      const [response, setResponse] = useState(null);
      const onSubmit= async (formData:IFormInput)=>{
        const router=useRouter();
        try {
          const response = await axios.post('http://localhost:3000/auth/signup/forwarder', formData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          setResponse(response.data);
          router.push('/login/freightforwarder');
        } catch (error) {
          console.error('Error:', error);
        }
      } 
       return (
    <div className='flex'>
        <img src="../../../public/login-page-bg.png" className='h-screen' alt="" />
        <div className='flex flex-col mt-10 w-[500px]  mx-auto'>
            <img src={logo.src} className='w-[609px] ' alt="" />
            <h1 className='text-[#313131] text-4xl font-bold mt-6 '>Sign up</h1>
            <h1 className='text-[#313131] text-sm my-3 '>Let's get you all set up so you can access your personal account.</h1>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-6 relative'>
            <label className='text-[#313131] z-50 left-5 top-[-10px] bg-white text-sm absolute'>User Name</label>
            <input  className='p-4 border-2  border-[#79747E] rounded-md w-[312px] h-[56px] outline-none' {...register("username")} />
            <label className='text-[#313131] text-sm z-50 left-[300px] top-[-10px] absolute bg-white'>Company Name</label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[312px] h-[56px] outline-none' {...register("companyName")} />
            </div>
            <div className='flex gap-6 relative'>
            <label className='text-[#313131] z-50 left-5 top-[-10px] bg-white text-sm absolute'>Country</label>
            <input  className='p-4 border-2  border-[#79747E] rounded-md w-[312px] h-[56px] outline-none' {...register("country")} />
            <label className='text-[#313131] text-sm z-50 left-[300px] top-[-10px] absolute bg-white'>Phone Number</label>
            <input type='number' className='p-4 border-2 border-[#79747E] rounded-md w-[312px] h-[56px] outline-none' {...register("phoneNumber")} />
            </div>
            <div className='flex flex-col gap-6 relative'>
            <label className='text-[#313131] text-sm  z-50 left-5 top-[-10px] absolute bg-white'>Email</label>
            <input type='email'  className='p-4 border-2 border-[#79747E] rounded-md w-[537px] h-[56px] outline-none' {...register("email")} />
            <label className='text-[#313131] text-sm  z-50 left-5 top-[70px] absolute bg-white'> password</label>
            <input type='password' className='p-4 border-2 border-[#79747E] rounded-md w-[537px] h-[56px] outline-none' {...register("password")} />
            <label className='text-[#313131] text-sm  z-50 left-5 top-[150px] absolute bg-white'> Years of experience </label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[537px] h-[56px] outline-none' {...register("experience")} />
            </div>
            <div className=' text-sm font-semibold text-[#312e33] flex flex-col ml-2'>
       
                <p className='mt-3'>By signing up, you agree to our <span className='text-[#353d92] font-bold'><a href="/terms">Terms of Service</a></span> and <span className='text-[#353d92] font-bold'><a href="/privacy">Privacy Policy</a></span></p>
            </div>
            <button className='w-[512px] bg-[#515DEF] rounded-md p-4 text-white mt-2' type="submit">Sign up</button>
            <p className='text-center mt-3 text-sm font-semibold'>Already have an account?<span className='text-[#353d92] font-bold'><a href="/login"> Login </a></span></p>
            </form>
            {response && <p className='text-center mt-4'>{JSON.stringify(response)}</p>}
        </div>
    </div>
  )
}

export default page