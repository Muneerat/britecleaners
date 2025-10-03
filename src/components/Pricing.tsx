import React from "react";
// import texture from "@/../public/assets/texture.png";

export default function Pricing() {
  return (
    <div
      className="bg-[#2c39b9] bg-texture bg-cover text-white md:p-16 p-6"
      id="pricing"
      data-aos="flip-left"
    >
      <h1 className=" mb-2 font-medium text-2xl text-center">
        How much does our cleaning services cost?
      </h1>
      <div>
        <div className="flex flex-col mx-auto max-w-2xl" data-aos="flip-left">
          <table className=" border-collapse">
            <thead>
              <tr className="text-left">
                <th className="py-2 md:px-[14px]">Cleaning Services</th>
                <th className="py-2 px-[14px]">Prices</th>
              </tr>
            </thead>

            <tbody className="bg-white text-[#6b6b78] ">
              <tr>
                <td className="border-[#2c39b9] border-2 py-[12px] md:px-[14px] px-6">
                  Residential cleaning
                </td>
                <td className="border-[#2c39b9] border-2 py-[12px] px-[14px]">
                  From £20 per hour
                </td>
              </tr>
              <tr>
                <td className="border-[#2c39b9] border-2 py-[12px] md:px-[14px] px-6">
                  Deep house cleaning
                </td>
                <td className="border-[#2c39b9] border-2 py-[12px] px-[14px]">
                  From £25 per hour
                </td>
              </tr>
              <tr>
                <td className="border-[#2c39b9] border-2 py-[12px] md:px-[15px] px-6">
                  Oven clean
                </td>
                <td className="border-[#2c39b9] border-2 py-[12px] px-[15px]">
                  £75{" "}
                </td>
              </tr>
              <tr>
                <td className="border-[#2c39b9] border-2 py-[12px] md:px-[15px] px-6">
                  {" "}
                  Commercial cleaning
                </td>
                <td className="border-[#2c39b9] border-2 py-[12px] px-[14px] font-semibold text-[#2c39b9]">
                  {" "}
                  <a href="tel:+447424524151">Contact us: 07424 524151</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-center p-2">
            For exact rates, contact us on 07424 524151.
          </p>
        </div>
      </div>
    </div>
  );
}
