import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const BestSellingSection = () => {
  const whatsappLink = "https://chat.whatsapp.com/LJQQCRlcTrvBydnQkEuRIi";

  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const bestSellingProducts = [
    {
      id: 1,
      name: "Name of the product",
      price: "$38.99",
      rating: "5.0",
      image: "/2bc329a927b8c87fe296f83f6a405f54-removebg-preview.png",
    },
    {
      id: 2,
      name: "Name of the product",
      price: "$38.99",
      rating: "5.0",
      image: "/fd54de39549cfd3da6ce09afed1b60e4-removebg-preview.png",
    },
    {
      id: 3,
      name: "Green Formal Suit",
      price: "$56.59",
      rating: "5.0",
      image: "/green-removebg-preview.png",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#c2efd4]" id="shop">
      <div className="container flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="relative w-full md:w-1/2 h-[505px] bg-[url(/cheerful-longhaired-woman-green-sweater-white-pants-smiling-purp.png)] bg-cover bg-center">
          <img
            className="absolute w-[119px] h-[110px] bottom-7 left-5"
            alt="Decorative element"
            src="/group-6.png"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <h2 className="font-poppins font-medium text-[#224f34] text-[50px] leading-tight">
            Best Selling
          </h2>

          <p className="font-poppins font-medium text-[#339158] text-[22px] tracking-[0.22px] leading-[48px]">
            Get in on the trend with our curated selection of best-selling styles
          </p>

          <div className="flex gap-8 flex-wrap">
            {bestSellingProducts.map((product) => (
              <button
                key={product.id}
                onClick={openWhatsApp}
                className="w-full md:w-auto text-left"
              >
                <Card className="w-full md:w-[430px] h-[566px] rounded-[3px] overflow-hidden border-none">
                  <CardContent
                    className="p-0 h-full"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: "100% 100%",
                      backgroundColor:
                        product.id === 1
                          ? "#c2efd4"
                          : product.id === 2
                          ? "#a5dfbc"
                          : "#c2efd4",
                    }}
                  />
                </Card>
                <div className="mt-4">
                  <h3 className="font-poppins font-semibold text-[#373737] text-[22px]">
                    {product.name}
                  </h3>
                  <div className="flex items-center mt-4 ml-2">
                    <span className="font-poppins font-semibold text-[#454545] text-[22px]">
                      {product.price}
                    </span>
                    <Separator orientation="vertical" className="mx-4 h-6" />
                    <div className="flex items-center">
                      <span className="font-poppins font-semibold text-[#454545] text-[22px]">
                        {product.rating}
                      </span>
                      <img
                        className="w-[19px] h-[19px] ml-1"
                        alt="Star symbol icon"
                        src="/star-symbol-icon-photoroom-1-10.png"
                      />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <Button
            onClick={openWhatsApp}
            className="w-[237px] h-[75px] bg-[#224f34] hover:bg-[#1a3d28] rounded-none font-poppins"
          >
            <span className="font-poppins font-medium text-white text-lg tracking-[0.18px] leading-[48px]">
              SHOP NOW
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};