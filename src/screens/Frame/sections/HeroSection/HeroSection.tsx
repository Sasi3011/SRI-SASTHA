import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "HOME", href: "#" },
    { text: "SHOP", href: "#" },
    { text: "FEATURES", href: "#" },
    { text: "CONTACT", href: "#" },
  ];

  return (
    <section className="relative w-full bg-[#c2efd4] py-12">
      {/* Navigation Bar */}
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="font-['Koh_Santepheap',Helvetica] font-bold text-[#224f34] text-[38.4px]">
          Ragendra
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-['Poppins',Helvetica] font-medium text-[#224f34] text-[22px]"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Shopping Bag and Login */}
        <div className="flex items-center gap-8">
          <div className="relative">
            <ShoppingBagIcon className="h-[35px] w-[35px] text-[#224f34]" />
            <div className="absolute w-[11px] h-[11px] bottom-0 right-0 bg-[#00ff29] rounded-full shadow-[0px_3px_8px_#0000001f]" />
          </div>

          <Button
            variant="outline"
            className="h-[52px] w-[142px] rounded-[3px] border-2 border-[#224f34] bg-transparent font-['Poppins',Helvetica] font-medium text-black text-xl"
          >
            LOGIN
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto mt-16 flex">
        {/* Left Content - Text and CTA */}
        <div className="flex-1 pr-8">
          <h1 className="font-['Rufina',Helvetica] font-normal text-[#224f34] text-[86px] leading-tight max-w-[542px]">
            Discover And Find Your Own Fashion
          </h1>

          <p className="font-['Rufina',Helvetica] font-normal text-[#0e9143] text-2xl leading-[45.8px] mt-12 max-w-[521px]">
            Explore Our Curated Collection Of Stylish Clothing And Accessories
            Tailored To Your Unique Taste
          </p>

          <Button className="mt-16 w-[258px] h-[74px] bg-[#224f34] font-['Poppins',Helvetica] font-medium text-white text-xl shadow-[0px_37px_59.3px_#0000004f]">
            EXPLORE NOW
          </Button>
        </div>

        {/* Right Content - Images */}
        <div className="flex-1 relative">
          <div className="relative w-[533px] h-[688px]">
            <img
              className="absolute w-[485px] h-[688px] top-0 left-[29px] object-cover"
              alt="Fashion model"
              src="/green2-removebg-preview-1.png"
            />

            <img
              className="absolute w-[119px] h-[110px] top-[460px] left-0"
              alt="Decorative element"
              src="/group-4.png"
            />

            <img
              className="absolute w-[119px] h-[110px] top-[75px] left-[414px]"
              alt="Decorative element"
              src="/group-5.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
