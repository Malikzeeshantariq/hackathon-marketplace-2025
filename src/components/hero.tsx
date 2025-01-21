import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
        <div className='pl-0 py-0 h-[502px] md:w-full md:h-[704px] bg-white md:py-12 container mx-auto'>
            {/* Right Section */}
      <div className='mx-0 h-[502px] bg-[#2A254B] md:h-[584px] flex justify-between items-center md:mx-20'>
        <div className='text-white'>
           <h2 className=' w-[342px] h-[135px] text-[32px] leading-[45px] font-normal pt-0 md:pt-16 pl-5 md:pl-14 md:w-[513px] md:h-[90px]'>The furniture brand for the future, with timeless designs</h2>
          <div className='mt-20'>
          <button className='w-[170px] h-[56px] bg-[#494675] ml-16 my-12 rounded hidden md:block'>View collection</button>
          </div>
          <div>
          <p className=' mt-0  pt-0 pl-5 w-[342px] h-[135px] text-lg md:pl-[60px] md:mt-36 mb-12 md:w-[650px] md:h-[81]'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
        with nice fonts, tasteful colors and a beautiful way to display things digitally 
        using modern web technologies.</p> 
        <button className='w-[342px] ml-2 my-0 md:w-[170px] h-[56px] bg-[#494675] md:ml-16 md:my-12 rounded md:hidden'>View collection</button>
          </div>
              
        </div>
        <Image src={"/Right Image.png"} width={520} height={584} alt="profile" className='hidden md:block'></Image>
        </div>
    </div>
     )
}

export default Hero
