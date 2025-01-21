import React from 'react'
import Image from 'next/image'

const Popularproducts = () => {
  return (
   <div className='w-[390px] bg-white md:h-[744px] md:w-full container mx-auto'>
             {/* first Section */}
           <h3 className='text-[20px] pl-6 text-[#2A254B] md:text-[32px] leading-10 font-normal md:pl-20 mb-7 pt-16'>Our popular products</h3>
               {/* Second Section */}
           <div className='flex flex-wrap md:flex justify-evenly'>
               <div className='w-[300px] md:w-[630px] h-[462px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                   <Image src={"/The Poplar suede sofa.png"} width={630} height={375} alt="profile"></Image>
                   <h4 className='mt-6 font-normal'>The Poplar suede sofa</h4>
                   <p className='mt-2'>£980</p>
               </div >
               <div className='w-[150px] h-[338px] md:w-[305px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                   <Image src={"/The Dandy chair.png"} width={305} height={375} alt="profile"></Image>
                   <h4 className='mt-6 font-normal'>The Dandy chair</h4>
                   <p className='mt-2'>£250</p>
               </div >
               <div className='w-[150px] h-[338px] md:w-[305px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                   <Image src={"/Dandy Chair Black.png"} width={305} height={375} alt="profile"></Image>
                   <h4 className='mt-6 font-normal'>The Dandy chair</h4>
                   <p className='mt-2'>£250</p>
               </div >
               </div>
                {/* Third Section */}
               <div className='flex justify-center items-center mt-8'>
               <button className='mb-7 px-24 bg-[#F9F9F9] h-[56px] text-[#2A254B] md:px-8 py-4 font-normal text-[16px] rounded'>View collection</button>
           </div>
       </div>
  )
}

export default Popularproducts
