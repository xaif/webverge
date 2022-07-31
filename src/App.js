import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import Navbar from "../old/Navbar"
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Logo from './components/Logo'
import Faq from './components/Faq'
import Footer from './components/Footer'
// import Navbar from './components/Navbar'
import Contact from './pages/Contact'
// import About from './pages/About'

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <Logo />
    <Features />
    <Pricing />
    <Testimonial />
    <Faq />
    <Footer/>
    <BrowserRouter>

    <Routes>
    <Route path="contact" element={<Contact />} />
    </Routes>

  </BrowserRouter>
  {/* <Footer/> */}
  </>
  );
}

export default App;