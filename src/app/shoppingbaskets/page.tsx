import Header from '@/components/header'
import ShoppingCart from '@/components/shoppingcard'
import Topnav from '@/components/topnav'
import Footer from '@/components/footer'
import Footerend from '@/components/footerend'
import React from 'react'

const Shoppingbaskets = () => {
  return (
    <div>
       <Topnav/>
       <Header/>
      <ShoppingCart/>
      <Footer/>
      <Footerend/>
    </div>
  )
}

export default Shoppingbaskets
