"use client";

import Footer from "@components/Footer/Footer";
import Hero from "@components/Hero/Hero";
import Navbar from "@components/Navbar/Navbar";
import Service from "@components/Service/Service";
import Testimonial from "@components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
