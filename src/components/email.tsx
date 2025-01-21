import React from 'react'

const Email = () => {
  return (
    <div className='w-[390px] h-[350px] bg-[#F9F9F9] md:w-full md:h-[481px] pt-0 md:pt-[52px] pl-0 md:pl-[93px] pr-0 md:pr-[74px] pb-5 md:pb-[65px] container mx-auto'>
        <div className='bg-white h-[364px] w-full flex flex-col justify-evenly items-center gap-3 pr-6 md:pr-0'>
        <h1 className='w-[329px] h-7 text-xl md:w-[571px] md:h-3 font-normal md:text-4xl pt-4'>Join the club and get the benefits</h1>
        <p className=' text-sm md:text-base w-[329px] h-[42] md:w-[470px] md:h-[48px]'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
        <div>
       <input type='text' placeholder='your@email.com' className='w-[200px] md:w-[354px] h-[56px] px-4 pl-5'/>
      <button className='w-[118px] h-[56px] font-normal text-base text-white bg-[#2A254B]'>Sign up</button>
       </div>
       </div>  
    </div>
  )
}

export default Email
