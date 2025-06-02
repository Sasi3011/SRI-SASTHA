import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const DesignerClothesSection = (): JSX.Element => {
  // Footer navigation links data
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

  return (
    <footer className="w-full bg-[#224f34] py-16 px-6">
      <div className="container mx-auto max-w-[1728px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="flex flex-col gap-8">
            <h2 className="font-['Koh_Santepheap',Helvetica] font-bold text-white text-[38.4px]">
              Ragendra
            </h2>

            <div className="flex flex-col gap-4">
              <h3 className="font-['Roboto_Slab',Helvetica] font-medium text-white text-[22px]">
                SOCIAL MEDIA
              </h3>
              <div className="flex gap-4 mt-4">
                <img
                  className="w-[46px] h-[46px]"
                  alt="Icon twitter outline"
                  src="/---icon--twitter-outline-icon-.png"
                />
                <img
                  className="w-[31px] h-[31px]"
                  alt="Icon instagram"
                  src="/---icon--instagram-.png"
                />
                <img
                  className="w-[19px] h-[34px]"
                  alt="Icon facebook icon"
                  src="/---icon--facebook-icon-.png"
                />
              </div>
            </div>
          </div>

          {/* Shop links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Roboto_Slab',Helvetica] font-medium text-white text-[22px]">
              {footerLinks.shop.title}
            </h3>
            <nav className="flex flex-col gap-6">
              {footerLinks.shop.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['Poppins',Helvetica] font-medium text-[#c2efd4] text-[22px]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Roboto_Slab',Helvetica] font-medium text-white text-[22px]">
              {footerLinks.company.title}
            </h3>
            <nav className="flex flex-col gap-6">
              {footerLinks.company.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['Poppins',Helvetica] font-medium text-[#c2efd4] text-[22px]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Roboto_Slab',Helvetica] font-medium text-white text-[22px]">
              STAY UP TO DATE
            </h3>
            <div className="flex mt-4">
              <div className="relative flex w-full max-w-[489px]">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[57px] rounded-[3px] border-[#c2efd4] bg-transparent text-white font-['Poppins',Helvetica] font-medium text-xl pl-10 pr-4"
                />
                <Button
                  type="submit"
                  className="absolute right-0 h-[57px] w-[129px] bg-[#c2efd4] text-black rounded-none font-['Poppins',Helvetica] font-medium text-xl"
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-16">
          <Separator className="bg-white/50 h-0.5" />
          <div className="flex justify-end mt-4 gap-6">
            {footerLinks.legal.map((item, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-semibold text-white text-xl"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
