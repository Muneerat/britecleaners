import { icons } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

export default function Icons() {
  return (
    <div className="bg-[#f0f0f2] " data-aos="fade-up">
      <div className=" px-10 py-16 flex max-w-7xl gap-20 justify-center items-center flex-wrap mx-auto  ">
        {icons.map((icon, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <Image
              src={icon.img}
              alt="Icons"
              width={65}
              height={65}
              className="mb-3"
            />
            <h4 className="text-[#6b6b78]  font-semibold text-base  ">
              {icon.iconName}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
