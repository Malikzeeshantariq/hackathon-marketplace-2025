import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'

function Header(){
  return (
              <div className='hidden md:block bg-white container mx-auto'>
              <ul className='flex flex-row justify-center gap-10 text-gray-700 pt-4'>
                <li>
                <Link className="nav-links" href={"/allproducts"}>All Products</Link>
                </li>
                <li>
                <Link className="nav-links" href={"categories/plant-pots"}>Plant Pots</Link>
                </li>
                <li>
                <Link className="nav-links" href={"categories/ceramics"}>Ceramics</Link>
                </li>
                <li>
                <Link className="nav-links" href={"categories/tables"}>Tables</Link>
                </li>
                 <li>
                <Link className="nav-links" href={"categories/chairs"}>Chairs</Link>
                </li>
                <li>
                <Link className="nav-links" href={"categories/crockory"}>Crockery</Link>
                </li>
                <li>
                <Link className="nav-links" href={"categories/tableware"}>Tableware</Link>
                </li>
                <li>
                <Link className="nav-links" href={"categories/cutlery"}>Cutlery</Link>
                </li>
                <li>
                <Link className="nav-links" href={"/about"}>About us</Link>
                </li>
                </ul>
            </div>
)        }

export default Header
