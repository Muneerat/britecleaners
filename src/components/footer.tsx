import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/assets/Brite cleaning logo 2.png";
import { navLinks } from "@/app/lib/data";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Instagram from "@/../public/assets/Instagram_logo.png"
import whatsapp from "@/../public/assets/WhatsApp.svg.webp"

export default function Footer() {
  return (
    <div className="w-full bg-[#2c39b9] justify-center items-center text-white">
      <div className="w-full max-w-screen-2xl lg:px-10 px-5   relative  md:justify-items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-16 gap-10 md:py-24 py-10">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={104}
            height={70}
            className="h-min"
          />
          <p className="py-2">
            We provide high-quality cleaning services tailored to your needs.
            From homes to offices, we take pride in delivering spotless results
            with care.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-[#fff] md:text-base text-sm">
          <h2 className="font-bold text-white">Office opening times</h2>

          <p>
            <span className="min-w-[75px] inline-block">Mon-Thu</span>
            9am-8:30pm{" "}
          </p>
          <p>
            <span className="min-w-[75px] inline-block">Friday</span>9am-5:30pm
          </p>
          <p>
            <span className="min-w-[75px] inline-block">Saturday</span>9am-3pm
          </p>
          <p>
            <span className="min-w-[75px] inline-block">Sunday</span>Closed
          </p>
        </div>

        <div className="flex flex-col gap-3 text-[#8B8B8B] md:text-base text-sm">
          <h2 className="font-bold text-white">Company</h2>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white block transition-colors hover:text-[#2a92e6] border-b-2 border-transparent hover:border-[#fff] pb-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-[#fff] gap-4 max-w-[250px] md:text-base text-sm">
          <h1 className="font-bold text-white">Find us on</h1>
          <div className="flex flex-row gap-4">
            <Link href="https://www.facebook.com/profile.php?id=61580833543017">
              {" "}
            <FaFacebookSquare size={30} className="bg-[#1877F2]" />
            </Link>

            <Link href="https://www.instagram.com/britecleaners_ltd?igsh=MTVwajJtMDl2cXJiOA%3D%3D&utm_source=qr">
            <Image src={Instagram} alt="instagram" width={30} height={30}  />
            </Link>
            <Link href="https://wa.me/+447424524151">
            <Image src={whatsapp} alt="whatsapp" width={30} height={30}  />
            </Link>
          </div>

          {/* <div className="flex flex-col">
          
            <p className="text-base">Call/Whatsapp</p>
            <a href="tel:+447424524151">+447424524151</a>
          </div> */}

          <a className="" href="mailto:info@britecleaners.co.uk">
            info@britecleaners.co.uk
          </a>
        </div>
      </div>
    </div>
  );
}
