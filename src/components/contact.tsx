import React from "react";
import contact from "@/../public/assets/enquire-bg.jpg";
import Image from "next/image";
import { cleaningService } from "@/app/lib/data";
import { Check } from "lucide-react";
import From from "./from";

export default function Contact() {
  return (
    <section className="relative md:h-[80dvh] h-full min-h-[850px] mt-4 w-full flex  justify-center " id="contact" data-aos="flip-left">
      <Image src={contact} alt="hero" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-6 md:px-6 flex  md:flex-row flex-col  gap-20 text-white max-w-5xl py-20">
        <div className="md:w-1/2 font-medium">
          <h2 className=" mb-2 font-bold text-3xl">
            Our house cleaning services
          </h2>
          <p className="pb-5 pt-4 text-base font-medium">
            At Brite Cleaners we are very proud of both of our
            cleaning services, we provide you with a high-quality cleaning
            service with both our administration team and cleaners giving you
            all of the support you need to keep your home clean and tidy. If you
            have any queries our team would be happy to assist you - call us
            today on
            <span className="text-[#2a92e6] font-bold"> 07424 524151</span>.
          </p>
          <p className="py-4">
            Undecided? Here are just some cleaning tasks you could have reliable
            help with:
          </p>
          <div className="flex flex-col gap-3 ">
            {cleaningService.map((service) => (
              <div className="flex flex-row  gap-2 " key={service.id}>
                <div>
                  <Check className="text-[#2a92e6] w-6 stroke-4 flex justify-start" />
                </div>

                <p className="text-[#fff] text-base font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <p className="py-3 font-medium">
            Let&#39;s get your home gleaming clean again! Contact our friendly team
            today!
          </p>
        </div>
        <div className="md:w-1/2">
          <From />
        </div>
      </div>
    </section>
  );
}
