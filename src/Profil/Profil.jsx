import React from 'react'
import SectionReclamation from './SectionProfil'
import SectionReclamation2 from './Profil2'
import Header2 from '../PageClient/Header2'
import Footer from '../PageClient/Footer'

export const Profil = () => {
  return (
    <div>
        <Header2/>
        <SectionReclamation/>
        <SectionReclamation2/>
        <Footer/>
    </div>
  )
}
