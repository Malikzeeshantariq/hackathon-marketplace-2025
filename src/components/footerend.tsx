import React from 'react'
import { AiOutlinePinterest, AiOutlineSkype } from 'react-icons/ai'
import { CiLinkedin, CiTwitter } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'

const Footerend = () => {
  return (
          <div className='bg-[#2A254B] text-white h-[60px] container mx-auto grid grid-flow-col justify-between px-20 pt-5 border-t-2 border-[#4E4D93]'>
            <div>
             <p>Copyright 2022 Avion LTD</p>
             </div>
             <div className='hidden md:block'>
            <div className='grid grid-flow-col w-[264px]'>
            <CiLinkedin className='h-[24px] w-[24px]'/>
            <RiFacebookBoxFill className='h-[24px] w-[24px]'/>
            <FaInstagram className='h-[24px] w-[24px]'/>
            <AiOutlineSkype className='h-[24px] w-[24px]'/>
            <CiTwitter className='h-[24px] w-[24px]'/>
            <AiOutlinePinterest className='h-[24px] w-[24px]'/>
            </div>
            </div>
            </div>
             )
}

export default Footerend
