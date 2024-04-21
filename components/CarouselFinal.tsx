import React from 'react'
import img1 from "@/assets/images/footer-carasouel  (1).png"
import img2 from "@/assets/images/footer-carasouel  (2).png"
import img3 from "@/assets/images/footer-carasouel  (3).png"
import img4 from "@/assets/images/footer-carasouel  (4).png"
import img5 from "@/assets/images/footer-carasouel  (5).png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const CarouselFinal = () => {
  return (
    <div className='h-[760px] relative mb-14'>
        <div className='h-[360px]  bg-white'>
        <h1 className='font-bold text-primary text-center text-4xl my-4 '>Transporting Across The World</h1>
        <Carousel className="w-full mx-auto  mt-5">
  <CarouselContent>
    <CarouselItem className="basis-1/5">
      <img className='w-[320px] h-[407px]' src={img1.src} alt="" />
    </CarouselItem>
    <CarouselItem className="basis-1/5"> 
    <img  className='w-[320px] h-[407px]'src={img2.src} alt="" />
    </CarouselItem>
    <CarouselItem className="basis-1/5">
    <img className='w-[320px] h-[407px]' src={img3.src} alt="" />
    </CarouselItem>
    <CarouselItem className="basis-1/5">
    <img className='w-[320px] h-[407px]' src={img4.src} alt="" />
    </CarouselItem>
    <CarouselItem className="basis-1/5">
    <img className='w-[320px] h-[407px]' src={img5.src} alt="" />
    </CarouselItem>
    {/* <CarouselPrevious/>
    <CarouselNext/> */}

  </CarouselContent>
  
</Carousel>
        </div>
        <div className='h-[400px]  bg-[#273270]'>
      <button className='absolute p-4 bg-secondary top-[70%] left-[43%] text-white w-[200px] text-center mt-5 '>More Work</button>
        </div>
    </div>
    
  )
}

export default CarouselFinal