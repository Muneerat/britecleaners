import { whyUs } from "@/app/lib/data";
import { Check } from "lucide-react";
import React from "react";
import Form from "./from";
import Image from "next/image";
import advise from "@/../public/assets/advice.jpg"

export default function Require() {
  return (
    <div className="max-w-6xl py-16 px-10 mx-auto text-[#6b6b78]"  data-aos="fade-up" >
    
      <div className="flex md:flex-row flex-col justify-between gap-10">
        
        <div className="md:w-1/2">
          <h1 className=" mb-2 font-medium text-2xl">
           Where do you require cleaning?
          </h1>
          <p className="pb-4">
         Contact us today to book a cleaner in Manchester and Bolton.
          </p>
          <div className="flex flex-col  text-[#2c39b9] font-semibold text-lg">
              {/* <a className="" href="mailto:info@britecleaners.co.uk">
            info@britecleaners.co.uk
          </a>
           <a href="tel:+447424524151">07424 524151</a> */}
           <Form />
            {/* <Input id="fullname" placeholder="Enter your email" className="w-8/12 h-12" />
          <Button
            type="submit"
            size="lg"
            className="h-12 bg-[#2c39b9] hover:bg-[#2a92e6] text-primary-foreground w-8/12"
          >
          Start online booking
          </Button> */}
          </div>
         
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className=" mb-2 font-medium text-2xl">
           Why Brite Cleaners ?
          </h2>
          <div className="flex flex-col gap-3 ">
            {whyUs
            .map((why) => (
              <div className="flex flex-row  gap-2 " key={why.id}>
                <div>
                  <Check className="text-[#2c39b9] w-6 stroke-4 flex justify-start" />
                </div>

                <p className="text-[#6b6b78] text-base font-medium">
                  {why.description}
                </p>
              </div>
            ))}
            <Image src={advise} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
