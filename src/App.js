import React from 'react';
import "./App.css";
import Header from './components/header/Header'
import Home from './home/Home'
import About from './about/About'
import Skills from './skills/Skills'
import Work from './work/Work'
import Footer from './footer/Footer'
import ScrollUp from './scrollup/ScrollUp'

const App=()=>{
  return (
    <>
    <Header /> 

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
   
    </main>
    <Footer />
    <ScrollUp />



    </>
  )
}

export default App