import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ExclusiveOfferSection = () => {
  const whatsappLink = "https://chat.whatsapp.com/LJQQCRlcTrvBydnQkEuRIi";

  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const testimonials = [
    {
      id: 1,
      name: "Lakshay singh",
      text: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit prefectly. I'm beyond satified!",
      bgColor: "bg-white",
    },
    {
      id: 2,
      name: "Aditya Chopra",
      text: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended !",
      bgColor: "bg-[#c2efd4]",
    },
    {
      id: 3,
      name: "Emily Wilson",
      text: "I had a great experience shopping on this website. The clothes I brought are fashionable and comfortable. Highly satisfied!",
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="w-full max-w-[1380px] mx-auto py-16" id="features">
      <h2 className="text-center font-poppins font-semibold text-[#224f34] text-[50px] mb-16">
        Feedback Corner
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className={`w-[434px] h-[253px] shadow-[8px_7px_20px_#00000017] border-none ${testimonial.bgColor}`}
          >
            <CardContent className="p-0 relative h-full">
              <div className="absolute w-[158px] h-[84px] top-1.5 left-4">
                <div className="absolute top-[55px] left-[3px] font-poppins font-semibold text-[#224f34] text-[22px]">
                  {testimonial.name}
                </div>
                <div className="font-poppins text-black text-[50px] absolute top-0 left-0 font-semibold">
                  &quot;
                </div>
              </div>
              <div className="absolute w-[401px] top-[119px] left-[18px] font-poppins font-medium text-black text-base">
                {testimonial.text}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-16 gap-4">
        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 bg-white rotate-180 shadow-[0px_3px_10.8px_#0000000d] rounded-none p-0"
          onClick={openWhatsApp}
        >
          <div className="relative w-[13px] h-[21px]">
            <div className="relative w-[15px] h-[21px] -left-px">
              <img
                className="absolute w-3.5 h-3 top-0 left-0"
                alt="Previous"
                src="/group-40-1.png"
              />
              <img
                className="absolute w-[15px] h-3 top-2 left-0"
                alt="Previous"
                src="/group-41-1.png"
              />
            </div>
          </div>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 bg-[#c2efd4] rounded-none border-none p-0"
          onClick={openWhatsApp}
        >
          <div className="relative w-[13px] h-[21px]">
            <div className="relative w-[15px] h-[21px] -left-px">
              <img
                className="absolute w-3.5 h-3 top-0 left-px"
                alt="Next"
                src="/group-40.png"
              />
              <img
                className="absolute w-[15px] h-3 top-2 left-0"
                alt="Next"
                src="/group-41.png"
              />
            </div>
          </div>
        </Button>
      </div>
    </section>
  );
};