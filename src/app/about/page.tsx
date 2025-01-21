import Getintouch from '@/components/getintouch'
import Image from 'next/image'
import React from 'react'
import Productdetails from '@/components/productdetails'
import Featureblock from '@/components/featureblock'
import Footerend from '@/components/footerend'
import Footer from '@/components/footer'
import { CiCircleCheck } from 'react-icons/ci'
import Aboutusheader from '@/components/aboutusheader'
import { Headerproductlisting } from '@/components/headerproductlisting'

const Aboutpage = () => {
  return (
    <><div>
      <Headerproductlisting/>
      <Aboutusheader/>
      <div className='w-[390px] bg-white md:w-full h-[289px] md:h-[246px] flex justify-center items-center container mx-auto'>
        <h2 className='w-[342px] h-[225px] text-[32px] leading-10 md:text-4xl md:w-[704px] md:h-[100px] font-normal'>A brand built on the love of craftmanship,
        quality and outstanding customer service</h2>
      </div>
      <Getintouch/>
    </div>
    <div className='w-[390px] md:w-full h-[836px] md:h-[603px] bg-white container mx-auto flex relative'>
            <div className='w-[390px] h-[358px] md:w-[720px] md:h-[603px]'>            
              <Image src={"/Image.png"} width={720} height={603} alt="profile"></Image>
              </div>
           <div className='w-[342px] md:w-[480px] h-[264px] md:h-[68px] right-7 top-[406px] absolute md:top-[72px] md:right-[270px]'>
            <p className='font-normal text-2xl mb-6'>Our service isn’t just personal, it’s actually
            hyper personally exquisite</p>
            <p className='font-extralight text-base mb-6'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
            <p className='font-extralight text-base'> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <button className='bg-gray-50 h-[56px] font-normal text-gray-500 px-28 md:px-2 py-1 mt-12 md:mt-40'>Get in touch</button>
        </div>
        </div>
        <Featureblock/>
        {/* Join tje club section */}
        <div className="w-[390px] md:w-full h-[370px] md:h-[444px] bg-cover bg-center flex container mx-auto"
        style={{ backgroundImage: `url('join the club.png')` }}>
         <div className='w-[329px] h-[122px] text-white md:h-[364px] md:w-full flex flex-col justify-evenly items-center gap-3 pt-8'>
        <h3 className=' w-[329px] md:w-[571px] h-3 font-normal text-2xl md:text-4xl pb-12 pl-3 md:pl-0 '>Join the club and get the benefits</h3>
        <p className='w-[329px] md:w-[470px] h-[42px] md:h-[48px] pb-14 font-light md:font-normal pl-3 md:pl-0'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
        <div className='flex flex-col justify-start items-start gap-2 md:flex-row'>
          <div className='flex gap-x-2'>
        <CiCircleCheck className='bg-white text-black text-xl rounded-full' />
        <p>Exclusive offers</p>
        </div>
        <div className='flex gap-x-2'>
        <CiCircleCheck className='bg-white text-black text-xl rounded-full'/>
        <p>Free events</p>
        </div>
        <div className='flex gap-x-2'>
        <CiCircleCheck className='bg-white text-black text-xl rounded-full'/>
        <p>Large discounts</p>
        </div>
        </div>
        <div>
       <input type='text' placeholder='your@email.com' className='w-[200px] md:w-[354px] h-[56px] px-3 md:px-4 pl-0 md:pl-5'/>
      <button className='w-[118px] h-[56px] font-normal text-base text-white bg-[#2A254B]'>Sign up</button>
       </div>
       </div>  
        </div> 
        <Footer/>
        <Footerend/>            
        </>

  )
}

export default Aboutpage 
