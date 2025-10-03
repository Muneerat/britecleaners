import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import hero from "@/../public/assets/hero-bg.jpeg";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative md:h-[80dvh] h-full md:min-h-[700px] mt-4  w-full flex items-center justify-center text-center">
      <Image src={hero} alt="hero" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto  md:px-6 text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4 text-shadow-lg md:pt-0 pt-12 ">
          Looking for a reliable{" "}
          <span className="md:block mt-3"> cleaning service?</span>
        </h1>
        <div className=" bg-[#2c39b9] p-6 max-wxl rounded-lg w-full mb-6 mt-16" data-aos="flip-up">
          <h1 className=" mx-auto text-lg md:text-2xl mb-8 text-neutral-200">
            Manchester&#39;s leading domestic cleaning company is ready to help you
            get your home back on track with a thoroughly vetted local cleaner
            on a regular or one-off basis. Insurance cover is included!
          </h1>
          <div className="flex  md:flex-row flex-col gap-1 pb-6 items-center justify-center">
            <div className="flex items-center gap-1">
                <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
            <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
            <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
            <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
            <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
            <StarHalf className="text-[#ffce00] fill-[#ffce00] stroke-0" />
            </div>
          
            <p className="text-lg md:text-2xl">
              91% of clients recommend our service
            </p>
          </div>
          <div className="max-w-md mx-auto flex md:flex-row flex-col justify-center gap-4 my-2">
            <Link className="" href="/book">
             <Button
              type="submit"
              size="lg"
              className="h-12 bg-[#2a92e6] hover:bg-[#2c39b9] text-primary-foreground"
            >
              Book your cleaner online
            </Button></Link>
           
  
          </div>
          <h1 className=" mx-auto text-lg md:text-4xl font-semibold my-4">
            For a free personalised quote, call
            <span className="block">Brite Cleaners on 07424 524151</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
