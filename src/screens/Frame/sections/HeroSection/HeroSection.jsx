import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = () => {
  const whatsappLink = "https://chat.whatsapp.com/LJQQCRlcTrvBydnQkEuRIi";
  
  const navLinks = [
    { text: "HOME", href: "#" },
    { text: "SHOP", href: "#shop" },
    { text: "FEATURES", href: "#features" },
    { text: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative w-full bg-[#c2efd4] py-12">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="font-poppins font-bold text-[#224f34] text-[38.4px]">
          Ragendra
        </div>

        <div className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(link.href)}
              className="font-poppins font-medium text-[#224f34] text-[22px] cursor-pointer"
            >
              {link.text}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button onClick={openWhatsApp} className="relative">
            <ShoppingBagIcon className="h-[35px] w-[35px] text-[#224f34]" />
            <div className="absolute w-[11px] h-[11px] bottom-0 right-0 bg-[#00ff29] rounded-full shadow-[0px_3px_8px_#0000001f]" />
          </button>

          <Button
            variant="outline"
            className="h-[52px] w-[142px] rounded-[3px] border-2 border-[#224f34] bg-transparent font-poppins font-medium text-black text-xl"
            onClick={openWhatsApp}
          >
            LOGIN
          </Button>
        </div>
      </nav>

      <div className="container mx-auto mt-16 flex">
        <div className="flex-1 pr-8">
          <h1 className="font-poppins font-normal text-[#224f34] text-[86px] leading-tight max-w-[542px]">
            Discover And Find Your Own Fashion
          </h1>

          <p className="font-poppins font-normal text-[#0e9143] text-2xl leading-[45.8px] mt-12 max-w-[521px]">
            Explore Our Curated Collection Of Stylish Clothing And Accessories
            Tailored To Your Unique Taste
          </p>

          <Button 
            className="mt-16 w-[258px] h-[74px] bg-[#224f34] font-poppins font-medium text-white text-xl shadow-[0px_37px_59.3px_#0000004f]"
            onClick={openWhatsApp}
          >
            EXPLORE NOW
          </Button>
        </div>

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