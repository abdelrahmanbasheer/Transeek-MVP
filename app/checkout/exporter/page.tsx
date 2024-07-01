"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PagesNavbar from "@/components/Navbar/PagesNavbar";
import React, { useEffect, useState } from "react";
import paypal from "@/assets/icons/paypal.png";
import axios from "axios"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import image1 from "@/assets/icons/cards_ title.png";
import success from"@/assets/icons/payment_success.png";
import { useUserStore } from "@/lib/useUserStore";


const Checkout = () => {
  
  const user = useUserStore((state) => state.user);
  const [payment, setPayment] = useState("credit");
  console.log(user)
  const handleUpdate = async () => {
    try {
      const url = `http://localhost:3000/api/exporters/${user?.id}/subscription`;

      const res = await axios.put(url, { isSubscribed:true }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });


    } catch (error) {
      console.error('Error:', error);
      
    }
  };
useEffect(() => {
  handleUpdate();
},[])
  
  return (
    <div>
      <nav>
        <Navbar></Navbar>
        <PagesNavbar title={"Checkout"}></PagesNavbar>
      </nav>
      <div className="my-16">
        <h1 className="font-bold text-center text-primary text-4xl mt-4">
          Payment
        </h1>
        <div className="flex justify-center gap-[140px] my-[60px]">
          <div className="w-[624px] h-[289px] bg-white border-[#EDEDED] border-[1px] rounded-lg">
            <h1 className="font-semibold text-2xl p-4">Payment</h1>
            <form>
              <div className="w-[503px] h-[48px] bg-[#F9F9F9] rounded-lg py-2 ml-4 my-2">
                <input
                  type="radio"
                  id="option1"
                  name="option"
                  value="1"
                  defaultChecked
                  onChange={() => setPayment("credit")}
                  className="w-[30px]"
                />
                <label className="text-[#2D2D2D]">Credit card</label>
              </div>
              <div className="w-[503px] h-[48px] bg-[#F9F9F9] rounded-lg py-2 ml-4 relative">
                <input
                  type="radio"
                  id="option2"
                  name="option"
                  value="2"
                  onChange={() => setPayment("paypal")}
                  className="w-[30px]"
                />
                <img
                  className="absolute top-[15px] left-9"
                  src={paypal.src}
                  alt=""
                />
              </div>
              <h1 className="font-semibold text-2xl  pl-4 py-2">
                Billing address
              </h1>
              <input
                className="w-[503px] h-[48px] rounded-lg ml-4 bg-[#F9F9F9] outline-none pl-5"
                placeholder="same as shipping address"
                type="text"
                name=""
                id=""
              />
            </form>
          </div>
          <div className="w-[416px] h-[700px] bg-white border-[#EDEDED] border-[1px] rounded-lg p-6">
            <h1 className="font-semibold text-2xl ">Premium</h1>
            <div className="flex gap-4 mt-4">
           
              <div className="ml-6">
               
                <h1 className="text-[#717171] text-sm">1</h1>
                <h1 className="text-[#717171] text-sm">{payment}</h1>
          
              </div>
            </div>
            <div className="flex justify-between  p-6 items-center">
              <div>
                <h1 className="text-[#717171] text-sm my-1">Subtotal</h1>
             
                <h1 className="text-[#717171] text-sm my-1">Shipment cost</h1>
              </div>
              <div>
                <h1 className="text-[#717171] text-sm">$59</h1>
                <h1 className="text-[#717171] text-sm">$0.00</h1>
              </div>
            </div>
            <hr />
            <div className="flex justify-between p-6">
              <h1 className="text-md">Grand Total</h1>
    
              <h1 className="text-md font-semibold">59</h1>
            </div>
            <Dialog>
              {payment === "paypal" ? (
                <button className="w-[368px] h-[48px] bg-[#111C55] text-white rounded-lg mt-10">
                  <a href="https://www.paypal.com/eg/home" target="_blank">
                    Continue to pay with paypal
                  </a>
                </button>
              ) : (
                <DialogTrigger className="w-[368px] h-[48px] bg-[#111C55] text-white rounded-lg mt-10">
                  Continue to pay
                </DialogTrigger>
              )}
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-[#444444] mb-2">
                    Add your payment method
                  </DialogTitle>
                  <DialogDescription>
                    <div>
                      <img src={image1.src} className="my-2" alt="" />
                      <form action="">
                        <input
                          type="text"
                          className="w-[535px] h-[48px] rounded-lg border-[1px] border-[#B4B4B4] outline-none pl-5 my-1"
                          placeholder="Card number"
                        />
                        <input
                          type="text"
                          className="w-[535px] h-[48px] rounded-lg border-[1px] border-[#B4B4B4] outline-none pl-5 my-1"
                          placeholder="Name on card"
                        />
                        <input
                          type="text"
                          className="w-[265px] h-[48px] rounded-lg border-[1px] border-[#B4B4B4] outline-none pl-5 my-1 mr-5"
                          placeholder="Expiration Date"
                        />
                        <input
                          type="text"
                          className="w-[250px] h-[48px] rounded-lg border-[1px] border-[#B4B4B4] outline-none pl-5 my-1"
                          placeholder="CCV"
                        />
                        <DialogClose asChild>
                          <button className="p-4 bg-white border-[1px] border-primary text-black w-[257px] h-[47px] text-center pb-10 mt-5 mr-5 rounded-lg">
                            close
                          </button>
                        </DialogClose>
                        <Dialog >
                          <DialogContent className="w-[442px] h-[530px]">
                            <DialogHeader>
                              <DialogDescription>
                                <div className="flex flex-col items-center">
                                  <img className="w-[150px] h-[150px]" src={success.src} alt="" />
                                  <h1 className="text-3xl text-[#146C43] font-semibold mt-3 mb-[38px]">Successful Payment</h1>
                                  <div className=" flex justify-between  w-[400px]">
                                    <div className="text-left">
                                    <h1 className="text-[#505050] text-sm my-2">Payment type </h1>
                                    <h1 className="text-[#505050] text-sm my-2">Phone number</h1>
                                    <h1 className="text-[#505050] text-sm my-2">Email</h1>
                                    <h1 className="text-[#505050] text-sm my-2">Transaction id</h1>
                                    <h1 className="text-[#717171] font-bold  my-3">Amount Paid</h1>
                                    </div>
                                    <div className="text-right">
                                    <h1 className="text-[#505050] text-sm my-2">Net Banking</h1>
                                    <h1 className="text-[#505050] text-sm my-2">{user?.phoneNumber}0</h1>
                                    <h1 className="text-[#505050] text-sm my-2">{user?.email}</h1>
                                    <h1 className="text-[#505050] text-sm my-2">123154</h1>
                                    <h1 className="text-[#717171] font-bold text-sm my-3">$59</h1>
                                    </div>
                                  </div>
                                  <DialogClose asChild>
                                  <button className="p-4 bg-primary border-[1px] border-primary text-white w-[257px] h-[47px] text-center pb-10 mt-5 mr-5 rounded-lg">
                                  Done
                                  </button>
                                  </DialogClose>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                          <DialogTrigger className="p-4 bg-primary text-white w-[257px] h-[47px] text-center pb-10 mt-5 rounded-lg cursor-pointer" onClick={()=>handleUpdate}>
                            Buy
                          </DialogTrigger>
                        </Dialog>
                      </form>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      {}
      <footer>
        <Footer image={false}></Footer>
      </footer>
    </div>
  );
};

export default Checkout;
