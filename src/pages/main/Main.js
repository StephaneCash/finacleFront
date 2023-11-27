import React from 'react'
import Home from '../../components/home/Home'
import Secteurs from '../../components/secteurs/Secteurs'
import Carriere from '../../components/carriere/Carriere'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

const Main = () => {
    return (
        <>
            <Home />
            <Secteurs />
            <Carriere />
            <About/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Main