"use client";

import * as React from "react";
import Link from "next/link";
import { Menu,  } from "lucide-react";
// import { Logo } from "@/components/icons/logo";
import { navLinks } from "@/app/lib/data";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import logo from '@/../public/assets/Brite cleaning logo.png'
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
       className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container m-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items- gap-2">
        <Image src={logo} className="h-18 md:w-full w-fit m-auto py-2 flex items-center justify-center" alt="logo" width={40} height={40} />
        </Link>
        <nav className="hidden items-center gap-6 md:flex justify-center ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-[#2c39b9] border-b-2 border-transparent hover:border-[#2c39b9] pb-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                 <Image src={logo} className="h-7 w-auto" alt="logo" width={40} height={40} />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-[#2c39b9] border-b-2 border-transparent hover:border-[#2c39b9] pb-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
