import React from 'react'
import { GoCreditCard } from 'react-icons/go'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { LuSprout } from 'react-icons/lu'
import { TbTruckDelivery } from 'react-icons/tb'

const Featureblock = () => {
  return (
      <div className='w-[390px] h-[757px] flex-col pl-6 md:flex-row bg-white md:h-[355px] md:w-full relative text-[#2A254B] flex justify-evenly md:items-center container mx-auto'>
         {/* uper section */}
        <h3 className='w-[274px] h-[56px] md:w-[366px] md:h-[34px] absolute top-4 md:left-[529px] md:top-[60px] font-normal text-2xl'>What makes our brand different</h3>
    <div className='w-[270px] h-[124px] font-normal text-base mt-24 md:mt-0'>
    <TbTruckDelivery className='w-[24px] h-[24px] mb-2'/>
    <h4 className='mb-2'>Next day as standard</h4>
    <p>Order before 3pm and get your order
    the next day as standard</p>
    </div>
     {/* lower section */}
    <div className='w-[270px] h-[124px]'>
    <IoIosCheckmarkCircleOutline className='w-[24px] h-[24px] mb-2'/>
    <h4 className='mb-2'>Made by true artisans</h4>
    <p>Handmade crafted goods made with
    real passion and craftmanship</p>

    </div>
    <div className='w-[270px] h-[124px]'>
    <GoCreditCard className='w-[24px] h-[24px] mb-2'/>
    <h4 className='mb-2'>Unbeatable prices</h4>
    <p>For our materials and quality you won’t find better prices anywhere</p>

    </div>
    <div className='w-[300px] h-[124px]'>
    <LuSprout className='w-[24px] h-[24px] mb-2' />
    <h4 className='mb-2'>Recycled packaging</h4>
    <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
    </div>
      
    </div>
  )
}

export default Featureblock
