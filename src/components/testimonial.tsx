import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/app/lib/data";
import { Star,  } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"

export default function Testimonial() {
  return (
    <div className="w-full md:max-w-6xl mx-auto my-14" id="review">
      <h1 className=" mb-2 px-4 font-bold md:text-3xl text-xl text-[#6b6b78] py-4">
        Manchester house cleaning reviews
      </h1>
      <div className="md:w-full w-6/8 mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
           plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 w-full md:w-6/12">
                <div className="p-1  ">
                  <Card className="bg-[#f0f0f2]">
                    <CardContent className="flex flex-col aspect-square p-4 md:w-full ">
                      <h1 className="font-bold text-xl px-4 text-[#6b6b78] py-">
                        {testimonial.name}
                      </h1>
                      <h2 className="text-[#6b6b78]">{testimonial.city}</h2>
                      <div className="flex gap-1 py-3 ">
                        <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
                        <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
                        <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
                        <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
                        <Star className="text-[#ffce00] fill-[#ffce00] stroke-0" />
                      </div>
                      <p className="text-[#6b6b78] text-base">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
