import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Link from 'next/link'
import { SheetSide } from './sheet'
const Aboutusheader = () => {
  return (
    <><div className='bg-white h-[66px] flex justify-between items-center px-5 container mx-auto border-b-2'>
          <h1 className="w-[65px] h-[30px] text-2xl"><Link className="nav-links" href={"/"}>Avion</Link></h1>
          <div className='md:hidden'>
             <SheetSide/>
          </div>
          <div className='hidden md:block'>
          <div className='flex gap-3 justify-center items-center'>
            <ul className='flex flex-row gap-4'>
            <li>
          <Link className="nav-links" href={"/about"}>About us</Link>
          </li>
          <li>
          <Link className="nav-links" href={"/allproducts"}>Contact</Link>
          </li>
          <li>
          <Link className="nav-links" href={"/allproducts"}>Blog</Link>
          </li>
          </ul>
            <CiSearch />
              <Link className="nav-links" href={"/shoppingbaskets"}><MdOutlineShoppingCart /></Link>
              <FaRegUserCircle />
          </div>
          </div>
      </div><div className='bg-white container mx-auto hidden md:block'>
              <ul className='flex flex-row justify-center gap-10 text-gray-700 pt-4'>
                  <li>
                      <Link className="nav-links" href={"/allproducts"}>All products</Link>
                  </li>
                  
                  <li>
                      <Link className="nav-links" href={"/"}>Plant pots</Link>
                  </li>
                  <li>
                      <Link className="nav-links" href={"/"}>Ceramics</Link>
                  </li>
                  <li>
                      <Link className="nav-links" href={"/"}>Tables</Link>
                  </li>
                  <li>
                      <Link className="nav-links" href={"/"}>Chairs</Link>
                  </li>
                  <li>
                      <Link className="nav-links" href={"/"}>Crockery</Link>
                  </li>
                  <li>
                      <Link className="nav-links" href={"/"}>Tableware</Link>
                  </li>
                  <li>
                      <Link className="nav-links" href={"/"}>Cutlery</Link>
                  </li>
              </ul>
          </div></>
  )
}

export default Aboutusheader
