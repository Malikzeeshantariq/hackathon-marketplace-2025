import React from 'react'
import Link from 'next/link'
import { TbTruckDelivery } from 'react-icons/tb'
 export const Headerproductlisting = () => {
  return (
    <div>
      <div className='h-[54px] bg-[#2A254B] text-white text-[14px] md:h-[41px] w-full flex justify-center items-center container mx-auto'>
      <TbTruckDelivery className='w-[16px] h-[16px] mr-2 ml-2' />
        <p>Free delivery on all orders over £50 with code easter checkout</p>
      </div>
    </div>
  )
}
