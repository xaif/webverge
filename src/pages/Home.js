import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Logo from "../components/Logo";
import Faq from "../components/Faq";
import Stats from "../components/Stats";
import Cta from "../components/Cta";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
<title>Next-Gen Hosting Makes Your WordPress Fly
</title>
<meta name="description" content="WebVerge is one of the Best Cheap web hosting in Mumbai. We provides the better web hosting at affordable prices.If you are looking for affordable hosting you can look at us."/>
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
<link rel="canonical" href="https://webverge.io/" />
<meta name="keywords" content="WordPress Managed Hosting" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Next-Gen Hosting Makes Your WordPress Fly" />
<meta property="og:description" content="WebVerge is one of the Best Cheap web hosting in Mumbai. We provides the better web hosting at affordable prices.If you are looking for affordable hosting you can look at us." />
<meta property="og:url" content="https://webverge.io/" />
<meta property="og:site_name" content="WebVerge" />
<meta property="og:updated_time" content="2022-01-19T00:18:58+05:30" />
<meta property="og:image" content="https://webverge.io/wp-content/uploads/2020/05/WebVerge.png" />
<meta property="og:image:secure_url" content="https://webverge.io/wp-content/uploads/2020/05/WebVerge.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="WebVerge" />
<meta property="og:image:type" content="image/png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Next-Gen Hosting Makes Your WordPress Fly" />
<meta name="twitter:description" content="WebVerge is one of the Best Cheap web hosting in Mumbai. We provides the better web hosting at affordable prices.If you are looking for affordable hosting you can look at us." />
<meta name="twitter:image" content="https://webverge.io/wp-content/uploads/2020/05/WebVerge.png" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Xaif" />
<meta name="twitter:label2" content="Time to read" />
<meta name="twitter:data2" content="29 minutes" />
<meta name="google-site-verification" content="eIMTS_uP5PtDv__BD94xFPvzzoU0AsKKMcTmlyTENqg" />
      </Helmet>
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
