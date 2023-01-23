import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Expirence from './components/experience/Expirence.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

 

const app = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Expirence />
        <Portfolio />
        <Contact />
        <Footer />

    </>
  )
}

export default app
