import Image from 'next/image'
import React from 'react'
import recruitment from "@/../public/assets/recruitment.jpeg"
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
import Require from '@/components/require'

export default function Book() {
  return (
    <div>
        <Navbar />
   
    <section className="relative md:h-[50dvh] h-[30dvh] md:min-h-[400px] mt-4  w-full bg-center flex items-center justify-center text-center">
      <Image src={recruitment} alt="hero" fill className="object-cover bg-center bg-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-6 md:px-6 text-white max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold tracking-wide mb-4 text-shadow-lg md:pt-0 pt-12 ">
         Book a trusted cleaner online within minutes
        </h1>
    </div>
    </section>
    <Require />
    <Footer />
     </div>
  )
}
