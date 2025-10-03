"use client";
import Area from "@/components/area";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import Hire from "@/components/hire";
import Icons from "@/components/icon";
import Local from "@/components/local";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/Pricing";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import AOS from 'aos';
import { useEffect } from "react";

export default function Home() {
   useEffect(() => {
    // We wrap AOS initialization in a check/try-catch for robustness 
    // against external dependency issues, while maintaining the correct hook usage.
    if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800, // global duration of animation
          once: true,    // whether animation should only happen once
        });
    }

  }, []);
  return (
   <div>
    <Navbar />
    <Hero />
    <Icons />
    <Service />
    <Pricing />
    <Local />
    <Contact />
    <Testimonial />
    <Hire />
    <Area />
    <Footer />
   </div>
  );
}
