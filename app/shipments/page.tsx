import Navbar from '@/components/Navbar/Navbar'
import PagesNavbar from '@/components/Navbar/PagesNavbar'
import React from 'react'
import logo from "@/assets/icons/maersk.png";
import blueIcon from "@/assets/icons/shipping-logo-1.png";
import orangeIcon from "@/assets/icons/shipping-logo-2.png";
import shipIcon from "@/assets/icons/shipping-logo-3.png";
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div>
      <nav>
      <Navbar></Navbar>
      <PagesNavbar title={"Get Shipment"}></PagesNavbar>
      </nav>
      <main>
        <div className='my-16'>
        <h1 className='font-bold text-center text-primary text-4xl mt-4'>Shipments</h1>
     </div>
     <div className='mt-5'>
    <ul className='flex flex-col gap-[40px] items-center'>
        <li className='w-[1200px] h-[288px] gap-[73px] flex'>
        <div className='w-[840px]'>
            <div className='flex justify-between'>
        <img src={logo.src} alt="" />
        <h1 className='font-bold text-[#000000] text-2xl text-opacity-60'>ID : 21854515</h1>
        </div>
        <div className='p-10 '>
        <ul className='flex self-center justify-between items-center'>
 
            <li className='flex flex-col relative'>
            <hr  className='w-[700px] h-[1px] bg-[#D0D5DD] z-[-50] top-[35px] absolute border-0'/>
            <h1 className='text-primary'>Los angeles</h1>
            <img src={blueIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085]'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Shipped</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <p className='text-[#667085] pb-1'>4 Days</p>
            <img src={shipIcon.src} className='w-[40px] h-[40px]  mx-auto' alt="" />
          
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Out Fee</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Brussels</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085] '>1/1/2024</p>
            </li>
        </ul>
        </div>
        </div>
        <div className='flex flex-col'>
            <h4 className='font-bold'>OVERDUE 2023-12-31</h4>
            <h4 className='font-bold'>ID 21400963</h4>
            <h4 className='font-bold'>107.75 kg C02</h4>
            <p className='p-1 bg-primary text-white w-[187px] font-bold h-[56px] text-center  my-3 rounded-lg'>1565$ <br /> request</p>
            <h4 className='font-bold text-[#000000] text-opacity-60'>View Details</h4>
        </div>
        </li>
        <li className='w-[1200px] h-[288px] gap-[73px] flex'>
        <div className='w-[840px]'>
            <div className='flex justify-between'>
        <img src={logo.src} alt="" />
        <h1 className='font-bold text-[#000000] text-2xl text-opacity-60'>ID : 21854515</h1>
        </div>
        <div className='p-10 '>
        <ul className='flex self-center justify-between items-center'>
 
            <li className='flex flex-col relative'>
            <hr  className='w-[700px] h-[1px] bg-[#D0D5DD] z-[-50] top-[35px] absolute border-0'/>
            <h1 className='text-primary'>Los angeles</h1>
            <img src={blueIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085]'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Shipped</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <p className='text-[#667085] pb-1'>4 Days</p>
            <img src={shipIcon.src} className='w-[40px] h-[40px]  mx-auto' alt="" />
          
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Out Fee</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Brussels</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085] '>1/1/2024</p>
            </li>
        </ul>
        </div>
        </div>
        <div className='flex flex-col'>
            <h4 className='font-bold'>OVERDUE 2023-12-31</h4>
            <h4 className='font-bold'>ID 21400963</h4>
            <h4 className='font-bold'>107.75 kg C02</h4>
            <p className='p-1 bg-primary text-white w-[187px] font-bold h-[56px] text-center  my-3 rounded-lg'>1565$ <br /> request</p>
            <h4 className='font-bold text-[#000000] text-opacity-60'>View Details</h4>
        </div>
        </li>
        <li className='w-[1200px] h-[288px] gap-[73px] flex'>
        <div className='w-[840px]'>
            <div className='flex justify-between'>
        <img src={logo.src} alt="" />
        <h1 className='font-bold text-[#000000] text-2xl text-opacity-60'>ID : 21854515</h1>
        </div>
        <div className='p-10 '>
        <ul className='flex self-center justify-between items-center'>
 
            <li className='flex flex-col relative'>
            <hr  className='w-[700px] h-[1px] bg-[#D0D5DD] z-[-50] top-[35px] absolute border-0'/>
            <h1 className='text-primary'>Los angeles</h1>
            <img src={blueIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085]'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Shipped</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <p className='text-[#667085] pb-1'>4 Days</p>
            <img src={shipIcon.src} className='w-[40px] h-[40px]  mx-auto' alt="" />
          
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Out Fee</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] mx-auto' alt="" />
            <p className='text-[#667085]  mx-auto'>1/1/2024</p>
            </li>
            <li className='flex flex-col'>
            <h1 className='text-[#D0D5DD]'>Brussels</h1>
            <img src={orangeIcon.src} className='w-[18px] h-[22px] items-center' alt="" />
            <p className='text-[#667085] '>1/1/2024</p>
            </li>
        </ul>
        </div>
        </div>
        <div className='flex flex-col'>
            <h4 className='font-bold'>OVERDUE 2023-12-31</h4>
            <h4 className='font-bold'>ID 21400963</h4>
            <h4 className='font-bold'>107.75 kg C02</h4>
            <p className='p-1 bg-primary text-white w-[187px] font-bold h-[56px] text-center  my-3 rounded-lg'>1565$ <br /> request</p>
            <h4 className='font-bold text-[#000000] text-opacity-60'>View Details</h4>
        </div>
        </li>
    </ul>
     </div>
    </main>
    <footer>
        <Footer image={false}></Footer>
    </footer>
    </div>
  )
}

export default page  