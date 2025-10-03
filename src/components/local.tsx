import React from "react";
import local from "@/../public/assets/image.jpeg";
import Image from "next/image";

export default function Local() {
  return (
    <div className="flex md:flex-row  flex-col justify-between md:p-20 p-6">
      <div className="md:w-1/2 flex flex-col justify-center ">
        <h1 className=" mb-2 font-medium text-2xl text-left">
          Manchester&#39;s local office
        </h1>
        <p className=" md:w-lg">
          Every cleaner has a valid DBS and we ensure clients are receiving the
          best service possible. We also ensure the cleaners are happy.{" "}
          <span className="block text-[#2c39b9]">Reach us @ 07424 524151</span>
          .
        </p>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <Image src={local} alt="" width={450} height={450} />
      </div>
    </div>
  );
}
