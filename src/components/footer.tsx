import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='px-10 w-[370px] bg-[#2A254B] h-[750px] md:h-[320px] md:w-full container mx-auto md:px-20 pt-14'>
      <div className='grid-cols-2 grid md:grid-cols-6 gap-24 md:gap-4  text-white font-light cursor-pointer'>
        <div className='w-[108px] h-[175px]'>
            <ul className='grid gap-3'>
                <li className='text-base'><a/>Menu</li>
                <li className='text-[14px]'><a/>New arrivals</li>
                <li className='text-[14px]'><a/>Best sellers</li>
                <li className='text-[14px]'><a/>Recently viewed</li>
                <li className='text-[14px]'><a/>Popular this week</li>
                <li className='text-[14px]'><Link className="nav-links" href={"/allproducts"}>All products</Link></li>
            </ul>
        </div>
        <div className='w-[84px] h-[206px]'>
            <ul className='grid gap-3'>
            <li className='text-base'><a/>Categories</li>
            <li className='text-[14px]'><a/>Furniture</li>
            <li className='text-[14px]'><a/>Crockery</li>
            <li className='text-[14px]'><a/>Homeware</li>
            <li className='text-[14px]'><a/>Plant pots</li>
            <li className='text-[14px]'><a/>Chairs</li>
            <li className='text-[14px]'><a/>Crockery</li>
            </ul>
        </div>
        <div className='w-[105px] h-[175px]'>
            <ul className='grid gap-3'>
            <li className='text-base'><a/>Our company</li>
            <li className='text-[14px]'><Link className="nav-links" href={"/about"}>About us</Link></li>
            <li className='text-[14px]'><a/>Vacancies</li>
            <li className='text-[14px]'><a/>Contact us</li>
            <li className='text-[14px]'><a/>Privacy</li>
            <li className='text-[14px]'><a/>Returns policy</li>
            </ul>
        </div>
        <div className='col-start-1 col-end-3 md:col-start-4 md:col-end-7' >
            <p className='text-base mb-3'>Join our mailing list</p>
            <input type='text' placeholder='your@email.com' className='px-6 pl-5 w-[200px] md:w-[509px] h-[56px] md:px-4 md:pl-5 bg-[#4E4D93]'/>
            <button className='py-0 md:py-4 px-3 md:px-8 h-[56px] font-normal text-base bg-white text-[#2A254B]'>Sign up</button>
        </div>     
        </div>
    </div>
  )
}

export default Footer
