import React from "react";
import { BrowserRouter, Routes, Route, Switch, Link} from "react-router-dom";
// import Navbar from "../old/Navbar"
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Logo from './components/Logo'
import Faq from './components/Faq'
import Footer from "./components/Footer"
// import About from './pages/About'

function App() {
  return (
    <>
    <Hero />
    <Logo />
    <Features />
    <Pricing />
    <Testimonial />
    <Faq />
    <Footer/>
    <BrowserRouter>
    <Routes>
    
    </Routes>
  </BrowserRouter>
  {/* <Footer/> */}
  </>
  );
}

export default App;