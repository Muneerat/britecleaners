import { services } from "@/app/lib/data";
import { Check } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Service() {
  return (
    <div
      className="max-w-6xl py-16 md:px-10 px-6 mx-auto text-[#6b6b78]"
      id="services"
      data-aos="fade-up"
    >
      <div>
        <h1 className="text-[#6b6b78] mb-6 font-medium text-3xl md:text-center">
          What cleaning services do we provide?
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-between gap-10">
        <div className="md:w-1/2">
          <h2 className=" mb-2 font-medium text-2xl">
            Residential cleaning in Manchester
          </h2>
          <p className="pb-4">
            Having a hard time keeping on-top of your domestic cleaning tasks?
            Our regular service will be ideal for you! It&#39;s our most popular
            cleaning service and comes with very affordable rates, starting from
            just £20 per hour.
          </p>
          <div className="flex flex-col gap-3 ">
            {services.map((service) => (
              <div className="flex flex-row  gap-2 " key={service.id}>
                <div>
                  <Check className="text-[#2c39b9] w-6 stroke-4 flex justify-start" />
                </div>

                <p className="text-[#6b6b78] text-base font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <h1 className=" text-3xl text-[#2c39b9] font-bold py-4">
            From £20 per hour
          </h1>
        </div>
        <hr className="text-black md:w-0.5 md:flex hidden md:h-[27rem] bg-[#6b6b78]" />
        <div className="md:w-1/2">
          <h1 className=" mb-2 font-medium text-2xl">
            Oven clean cleaning in Manchester
          </h1>
          <p className="pb-4">
            Our one-off oven cleans are perfect for getting your oven looking
            wonderful again. There is no need for a long-term contract and you
            can be at ease knowing the cleaning service includes the relevant
            insurance coverage.
          </p>
          <p className="pb-4 text-[#2c39b9] font-semibold">
            Still have a question? Contact us on 07424 524151
          </p>

          <h1 className=" text-3xl text-[#2c39b9] font-bold py-4">£70</h1>
          <Link className="" href="/book">
            <Button
              type="submit"
              size="lg"
              className="h-12 bg-[#2c39b9] hover:bg-[#2a92e6] text-primary-foreground"
            >
              Book online
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
