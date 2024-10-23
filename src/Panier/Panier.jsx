import React from 'react'
import Header2 from '../StatistiqueClients/Header2'
import SectionPanier  from './SectionPanier'
import HeaderPanier from './HeaderPanier'
import Footer from '../Menu/Footer'

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
