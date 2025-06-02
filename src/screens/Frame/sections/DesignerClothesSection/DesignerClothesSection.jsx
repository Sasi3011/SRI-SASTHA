import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const DesignerClothesSection = () => {
  const whatsappLink = "https://chat.whatsapp.com/LJQQCRlcTrvBydnQkEuRIi";

  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const footerLinks = {
    shop: {
      title: "SHOP",
      links: ["Products", "Overview", "Pricing", "Releases"],
    },
    company: {
      title: "COMPANY",
      links: ["About Us", "Contact", "News", "Support"],
    },
    legal: ["Terms", "Privacy", "Cookies"],
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    openWhatsApp();
  };

  return (
    <footer className="w-full bg-[#224f34] py-16 px-6" id="contact">
      <div className="container mx-auto max-w-[1728px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-8">
            <h2 className="font-poppins font-bold text-white text-[38.4px]">
              Ragendra
            </h2>

            <div className="flex flex-col gap-4">
              <h3 className="font-poppins font-medium text-white text-[22px]">
                SOCIAL MEDIA
              </h3>
              <div className="flex gap-4 mt-4">
                {["twitter", "instagram", "facebook"].map((social) => (
                  <button
                    key={social}
                    onClick={openWhatsApp}
                    className="cursor-pointer"
                  >
                    <img
                      className="w-[46px] h-[46px]"
                      alt={`Icon ${social}`}
                      src={`/---icon--${social}${social === "twitter" ? "-outline-icon-" : social === "facebook" ? "-icon-" : "-"}.png`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {["shop", "company"].map((section) => (
            <div key={section} className="flex flex-col gap-4">
              <h3 className="font-poppins font-medium text-white text-[22px]">
                {footerLinks[section].title}
              </h3>
              <nav className="flex flex-col gap-6">
                {footerLinks[section].links.map((link, index) => (
                  <button
                    key={index}
                    onClick={openWhatsApp}
                    className="font-poppins font-medium text-[#c2efd4] text-[22px] text-left"
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="font-poppins font-medium text-white text-[22px]">
              STAY UP TO DATE
            </h3>
            <form onSubmit={handleEmailSubmit} className="flex mt-4">
              <div className="relative flex w-full max-w-[489px]">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[57px] rounded-[3px] border-[#c2efd4] bg-transparent text-white font-poppins font-medium text-xl pl-10 pr-4"
                />
                <Button
                  type="submit"
                  className="absolute right-0 h-[57px] w-[129px] bg-[#c2efd4] text-black rounded-none font-poppins font-medium text-xl"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <Separator className="bg-white/50 h-0.5" />
          <div className="flex justify-end mt-4 gap-6">
            {footerLinks.legal.map((item, index) => (
              <button
                key={index}
                onClick={openWhatsApp}
                className="font-poppins font-semibold text-white text-xl text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};