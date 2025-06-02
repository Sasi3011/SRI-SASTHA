import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const BestSellingSection = (): JSX.Element => {
  // Data for countdown timer boxes
  const countdownData = [
    { value: "03", label: "Days" },
    { value: "19", label: "Hours" },
    { value: "26", label: "Min" },
  ];

  return (
    <section className="w-full py-16 bg-[#c2efd4]">
      <div className="container flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Image section */}
        <div className="relative w-full md:w-1/2 h-[505px] bg-[url(/cheerful-longhaired-woman-green-sweater-white-pants-smiling-purp.png)] bg-cover bg-center">
          <img
            className="absolute w-[119px] h-[110px] bottom-7 left-5"
            alt="Decorative element"
            src="/group-6.png"
          />
        </div>

        {/* Content section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <h2 className="font-medium text-[#224f34] text-[50px] font-['Roboto_Slab',Helvetica] leading-tight">
            Exclusive Offer
          </h2>

          <p className="font-medium text-[#339158] text-[22px] tracking-[0.22px] leading-[48px] font-['Roboto_Slab',Helvetica]">
            Unlock the unlimited style upgrade with our exclusive offer Enjoy
            savings of up to 40% off on your latest New Arrivals
          </p>

          {/* Countdown timer */}
          <div className="flex gap-[35px]">
            {countdownData.map((item, index) => (
              <Card
                key={index}
                className="w-[100px] h-[100px] bg-white shadow-[0px_7px_30px_#0000000d] flex items-center justify-center"
              >
                <div className="flex flex-col items-center">
                  <span className="font-['Roboto_Slab',Helvetica] font-medium text-[#224f34] text-[34px] tracking-[0.34px] leading-[48px]">
                    {item.value}
                  </span>
                  <span className="font-['Roboto_Slab',Helvetica] font-medium text-[#224f34] text-xl tracking-[0.20px] leading-[48px]">
                    {item.label}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="w-[237px] h-[75px] bg-[#224f34] hover:bg-[#1a3d28] rounded-none">
            <span className="font-['Poppins',Helvetica] font-medium text-white text-lg tracking-[0.18px] leading-[48px]">
              SHOP NOW
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
