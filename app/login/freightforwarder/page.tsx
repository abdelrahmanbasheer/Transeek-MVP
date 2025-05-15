'use client'
import React, { useState } from 'react'
import logo from "@/assets/icons/logoXL.png";
import axios from "axios"
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/lib/useUserStore';
const LoginFr = () => {
  const setuser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const router=useRouter();
    interface IFormInput {
        email: string;
        password: string;
        userType:string;
      }
      const [curr, setCurr] = useState("freightForwarder");
      const { register,handleSubmit } = useForm<IFormInput>({
        defaultValues: {
          email: "",
          password: "",
          userType:curr,
        },
      });
      const onSubmit = (formData: IFormInput) => {
        axios.post("http://localhost:3000/auth/login",formData)
         .then(response => {
           //get token from response
           const token  =  response.data.token;
           localStorage.setItem("token", token);
           //redirect user to home page
           const userData=response.data.user;
           if (userData) {
   
             setuser(userData);
             console.log(user)
           } else {
             console.error("No user data found in response.");
           }
           router.push('/');
         })
         
         .catch(err => {
           
           console.log(err)
           setErrorMessage("invalid Email or Password")
       });
     };
  // const handleUpdate = async () => {
  //   try {
  //     const url = `http://localhost:3000/api/freight-forwarders/1/subscription`;

  //     const res = await axios.put(url, { isSubscribed:false }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });


  //   } catch (error) {
  //     console.error('Error:', error);
      
  //   }
  // };
  // handleUpdate();
    const [errorMessage, setErrorMessage] = useState("")
    console.log(curr)
  return (
    <div className='flex'>
        <img src="./login-page-bg.png" className='h-screen' alt="" />
        <div className='flex flex-col mt-10 w-[500px]  mx-auto'>
            <img src={logo.src} className='w-[609px] mt-10 ' alt="" />
            <h1 className='text-[#313131] text-4xl font-bold mt-[130px] '>Login</h1>
            <h1 className='text-[#313131] text-sm my-3 '>Login to access your travelwise  account</h1>
            <form className='relative flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
            <label className='text-[#313131] text-sm z-50 left-5 top-[-10px] bg-white absolute'>Email</label>
            <input  className='p-4 border-2 border-[#79747E] rounded-md w-[512px] h-[56px] outline-none' {...register("email",{
        required: {
          value: true,
          message: "Email is required",
        },
      })} />
            <label className='text-[#313131] text-sm z-50 left-5 top-[65px] bg-white absolute'>Password</label>
            <input type='password'  className='p-4 border-2 border-[#79747E] rounded-md w-[512px] h-[56px] outline-none' {...register("password",{
        required: {
          value: true,
          message: "Password is required",
        },
      })} />
            <div className='text-center mt-3 text-sm font-semibold text-red-500 flex justify-between ml-2'>
              {errorMessage}
              <span className='text-[#353d92] font-semibold'><a href="/forgetPassword">Forgot Password</a></span></div>
            <button className='w-[512px] bg-[#515DEF] rounded-md p-4 text-white mt-10' type="submit" >Login</button>
           
            <p className='text-center mt-3 text-sm font-semibold'>Don't have an account? <span className='text-[#353d92] font-bold'><a href="/signup">Sign up</a></span></p>
            </form>
        </div>
    </div>
  )
}

export default LoginFr