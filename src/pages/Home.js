import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Logo from "../components/Logo";
import Faq from "../components/Faq";
import Stats from "../components/Stats";
import Cta from "../components/Cta";


const Home = () => {
  return (
    <>
      <Hero />
      <Logo />
      <Features />
      <Pricing />
      <Stats />
      <Testimonial />
      <Faq />
      <Cta />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
