import Image from "next/image";
import React from "react";
import hire from "@/../public/assets/recruitment.jpeg";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hire() {
  return (
    <div className=" md:p-10 p-6  bg-[#f0f0f2]  mt-4" id="recruitment">
      <div className="flex  md:flex-row flex-col  max-w-5xl mx-auto gap-14">
        <Image src={hire} alt="hire" width={200} height={100}  />
        <div>
          <h1 className=" mb-2 font-bold md:text-3xl text-2xl">
            Looking for local cleaning work in Manchester?
          </h1>
          <p className="pb-5 pt-4 text-base font-medium">
            We can provide you with part-time cleaning work around Manchester
            that fits in with your current availability. 
          </p>
          <Link  href="mailto:info@britecleaners.co.uk" className="text-[#2c39b9] font-bold">
           Contact us via our email:  info@britecleaners.co.uk
          </Link>
       
        </div>
      </div>
    </div>
  );
}
