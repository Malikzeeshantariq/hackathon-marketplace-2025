import React from 'react'
import Image from 'next/image'

const Listings = () => {
  return (
    <div className='w-[390px] h-[811px] bg-white md:h-[761px] md:w-full container pr-6 md:mx-auto'>
          {/* first Section */}
        <h3 className=' text-[20px] pl-6 text-[#2A254B] md:text-[32px] leading-10 font-normal md:pl-20 mb-7 pt-16'>New ceramics</h3>
            {/* Second Section */}
        <div className=' flex flex-wrap md:flex justify-evenly items-center'>
            <div className='w-[163px] md:w-[305px] h-[288px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                <Image src={"/The Dandy chair.png"} width={305} height={375} alt="profile"></Image>
                <h4 className='mt-6 font-normal'>The Dandy chair</h4>
                <p className='mt-2'>£250</p>
            </div >
            <div className='w-[163px] md:w-[305px] h-[288px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
            <Image src={"/Rustic Vase Set.png"} width={305} height={375} alt="profile"></Image>
            <h4 className='mt-6 font-normal'>Rustic Vase Set</h4>
            <p className='mt-2'>£155</p>
            </div>
            <div className='w-[163px] md:w-[305px] h-[288px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
            <Image src={"/The Silky Vase.png"} width={305} height={375} alt="profile"></Image>
            <h4 className='mt-6 font-normal'>The Silky Vase</h4>
            <p className='mt-2'>£125</p>
            </div>
            <div className='w-[163px] md:w-[305px] h-[288px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
            <Image src={"/The Lucy Lamp.png"} width={305} height={375} alt="profile"></Image>
            <h4 className='mt-6 font-normal'>The Lucy Lamp</h4>
            <p className='mt-2'>£399</p>
            </div>
            </div>
             {/* Third Section */}
            <div className='flex justify-center items-center mt-8'>
            <button className=' bg-[#F9F9F9] h-[56px] text-[#2A254B] px-8 py-4 font-normal text-[16px] rounded'>View collection</button>
        </div>
    </div>
  )
}

export default Listings
