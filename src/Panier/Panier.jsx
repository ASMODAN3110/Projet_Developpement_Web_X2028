import React from 'react'
import SectionPanier  from './SectionPanier'
import HeaderPanier from './HeaderPanier'

import Header2 from '../PageClient/Header2'
import Footer from '../PageClient/Footer'

export const Panier = () => {
  return (
    <div>
        <Header2/>
        <HeaderPanier/>
        <SectionPanier/>
        <Footer/>
    </div>
  )
}
