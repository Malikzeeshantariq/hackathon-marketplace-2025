import React from 'react'
import Image from 'next/image'

const Getintouch = () => {
  return (
    <div className='w-[390px] h-[828px] bg-white md:h-[603px] flex-col flex md:flex-row justify-between md:w-full container mx-auto '>
        {/* right section */}
            <div className='pl-6 h-[603px] w-full md:pl-[84px] pt-[72px]'>
            <div >
            <h4 className='w-[274px] md:w-[514px] h-[84px] md:h-[68px] font-normal text-xl md:text-2xl'>From a studio in London to a global brand with over 400 outlets</h4>
            <p className='w-[342px] md:w-[536px] h-20 md:h-16 text-base mb-4 mt-4 font-light pr-2'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
             <p className=' w-[342px] md:w-[536px] h-14 text-base text-[16px] leading-[22px] font-light pr-3'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
             </div>
            <button className='px-28 mt-20 bg-gray-50 h-[56px] font-normal py-4 md:px-8 md:mt-48'>Get in touch</button>
            </div>
            <Image src={"/London interior.png"} width={720} height={603} alt="profile" ></Image>
        </div>
  )
}

export default Getintouch
