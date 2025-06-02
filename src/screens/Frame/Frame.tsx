import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { BestSellingSection } from "./sections/BestSellingSection";
import { DesignerClothesSection } from "./sections/DesignerClothesSection";
import { ExclusiveOfferSection } from "./sections/ExclusiveOfferSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";

export const Frame = (): JSX.Element => {
  // Product data for the first best selling section
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

  // Product data for the second best selling section
  const bestSellingProductsSecond = [
    {
      id: 1,
      name: "Summer Wind T-shirt",
      price: "$31.99",
      rating: "4.2",
      image: "/db68f1496e9c58086a16be4b424a4cd1-removebg-preview.png",
    },
    {
      id: 2,
      name: "Tailored Jacket",
      price: "$38.99",
      rating: "4.5",
      image: "/ea6e24108ec719339ab8eec9d774bd00-removebg-preview.png",
    },
    {
      id: 3,
      name: "Formal Classic suit",
      price: "$50.00",
      rating: "4.0",
      image: "/14eefadf3a0d181c7060e43579d6c0d5-removebg-preview.png",
    },
    {
      id: 4,
      name: "White Solid Formal T-shirt",
      price: "$42.09",
      rating: "5.0",
      image: "/e828df47b781a1d530bc8e15ea7f99ca-removebg-preview.png",
    },
    {
      id: 5,
      name: "Tailored Jacket",
      price: "$41.03",
      rating: "5.0",
      image: "/d987c1c0b274352e29e9b2bc96588d00-removebg-preview.png",
    },
    {
      id: 6,
      name: "Solid White Summer T-shirt",
      price: "$29.99",
      rating: "4.5",
      image: "/7f0b8d19c1b0d96f19aacd1c74aefeff-removebg-preview.png",
    },
    {
      id: 7,
      name: "Classic Top",
      price: "$24.54",
      rating: "3.8",
      image: "/5bf5497f3325ea116bdda17908a29830-removebg-preview.png",
    },
    {
      id: 8,
      name: "Formal Jeans",
      price: "$38.99",
      rating: "5.0",
      image: "/e9c4b37544a13b09a3487d2119854d9d-removebg-preview.png",
    },
  ];

  // Designer clothes data
  const designerClothes = [
    {
      id: 1,
      title: "Accessories",
      description:
        "Complete your ensemble with designer accessories such as handbags, scarves, belts and hats.",
      image: "/426404e8b99a172ccf0dbddce6801f66-removebg-preview.png",
      bgColor: "bg-[#4c43433d]",
    },
    {
      id: 2,
      title: "Accessories",
      description:
        "Explore a stunning range of designer dresses, including evening gowns and chic day dresses",
      image: "/young-woman-beautiful-red-dress-1303-17506-removebg-preview.png",
      bgColor: "bg-[#f2c9c978]",
    },
    {
      id: 3,
      title: "Accessories",
      description:
        "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons",
      image: "/6d8d45811a85e440f3014ee4d32285bd-removebg-preview--1--1.png",
      bgColor: "bg-[#d9d9d9]",
    },
  ];

  // Categories for the tabs
  const categories = ["SALE", "HOT", "NEW ARRIVAL", "ACCESSORIES"];

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1728px]">
        <div className="relative w-full">
          <div className="w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <HeroSection />

            {/* First Best Selling Section */}
            <section className="w-full mt-20 px-4">
              <h2 className="text-center font-semibold text-[#224f34] text-[64px] font-['Roboto_Slab',Helvetica] mb-6">
                Best Selling
              </h2>
              <p className="text-center font-normal text-black text-[22px] font-['Poppins',Helvetica] mb-12">
                Get in on the trend with our curated selection of best-selling
                stle
              </p>

              <div className="flex justify-center gap-8 mb-16">
                {bestSellingProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="w-[430px] h-[566px] rounded-[3px] overflow-hidden border-none"
                  >
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
                    ></CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center gap-8 mb-8">
                {bestSellingProducts.map((product) => (
                  <div key={product.id} className="w-[233px]">
                    <h3 className="font-semibold text-[#373737] text-[22px] font-['Poppins',Helvetica]">
                      {product.name}
                    </h3>
                    <div className="flex items-center mt-4 ml-2">
                      <span className="font-semibold text-[#454545] text-[22px] font-['Poppins',Helvetica]">
                        {product.price}
                      </span>
                      <Separator orientation="vertical" className="mx-4 h-6" />
                      <div className="flex items-center">
                        <span className="font-semibold text-[#454545] text-[22px] font-['Poppins',Helvetica]">
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
                ))}
              </div>

              <div className="flex justify-center mb-16">
                <Button
                  variant="outline"
                  className="w-56 h-[65px] border-2 border-[#224f34] rounded-none"
                >
                  <span className="font-semibold text-[#367b52] text-[22px] font-['Poppins',Helvetica] mr-4">
                    See more
                  </span>
                  <img className="w-6 h-[15px]" alt="Line" src="/line-3.svg" />
                </Button>
              </div>
            </section>

            {/* Categories Tabs */}
            <section className="w-full flex justify-center mb-12">
              <Tabs
                defaultValue={categories[0]}
                className="w-full max-w-[699px]"
              >
                <TabsList className="w-full bg-transparent justify-between border-none">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="font-medium text-black text-[22px] font-['Poppins',Helvetica] data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </section>

            {/* Second Best Selling Section */}
            <section className="w-full px-4 mb-16">
              <h2 className="text-center font-semibold text-[#224f34] text-[64px] font-['Roboto_Slab',Helvetica] mb-16">
                Best Selling
              </h2>

              <div className="grid grid-cols-4 gap-6 mb-8">
                {bestSellingProductsSecond.slice(0, 4).map((product) => (
                  <div key={product.id} className="mb-16">
                    <Card className="w-[318px] h-[378px] rounded-[3px] overflow-hidden border-none">
                      <CardContent className="p-0 h-full relative">
                        <div className="absolute w-full h-full bg-[#d9d9d9] opacity-30 rounded-[3px]"></div>
                        <img
                          className="w-full h-full object-cover relative z-10"
                          alt={product.name}
                          src={product.image}
                        />
                      </CardContent>
                    </Card>
                    <div className="mt-4">
                      <h3 className="font-semibold text-[#373737] text-[22px] font-['Poppins',Helvetica] text-center">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center mt-4">
                        <span className="font-semibold text-[#454545] text-[22px] font-['Poppins',Helvetica]">
                          {product.price}
                        </span>
                        <Separator
                          orientation="vertical"
                          className="mx-4 h-6"
                        />
                        <div className="flex items-center">
                          <span className="font-semibold text-[#454545] text-[22px] font-['Poppins',Helvetica]">
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
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-6">
                {bestSellingProductsSecond.slice(4, 8).map((product) => (
                  <div key={product.id}>
                    <Card className="w-[318px] h-[378px] rounded-[3px] overflow-hidden border-none">
                      <CardContent className="p-0 h-full relative">
                        <div className="absolute w-full h-full bg-[#d9d9d9] opacity-30 rounded-[3px]"></div>
                        <img
                          className="w-full h-full object-cover relative z-10"
                          alt={product.name}
                          src={product.image}
                        />
                      </CardContent>
                    </Card>
                    <div className="mt-4">
                      <h3 className="font-semibold text-[#373737] text-[22px] font-['Poppins',Helvetica] text-center">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center mt-4">
                        <span className="font-semibold text-[#454545] text-[22px] font-['Poppins',Helvetica]">
                          {product.price}
                        </span>
                        <Separator
                          orientation="vertical"
                          className="mx-4 h-6"
                        />
                        <div className="flex items-center">
                          <span className="font-semibold text-[#454545] text-[22px] font-['Poppins',Helvetica]">
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
                  </div>
                ))}
              </div>
            </section>

            {/* Best Selling Section Component */}
            <BestSellingSection />

            {/* Designer Clothes Section */}
            <section className="w-full px-4 mb-16">
              <h2 className="text-center font-semibold text-[#224f34] text-[50px] font-['Roboto_Slab',Helvetica] mb-6">
                Designer Clothes For You
              </h2>
              <p className="text-center font-medium text-black text-[22px] font-['Poppins',Helvetica] max-w-[1048px] mx-auto mb-12">
                Immerse yourself in the world of luxury fashion with our
                meticulously crafted designer clothes
              </p>

              <div className="flex justify-center gap-8">
                {designerClothes.map((item) => (
                  <div key={item.id} className="w-[430px]">
                    <Card className="w-full h-[566px] rounded-none border-none overflow-hidden">
                      <CardContent
                        className="p-0 h-full"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "100% 100%",
                          backgroundColor: item.bgColor.replace("bg-", ""),
                        }}
                      ></CardContent>
                    </Card>
                    <div className="mt-6 text-center">
                      <h3 className="font-semibold text-[#373737] text-[35px] font-['Poppins',Helvetica] mb-4">
                        {item.title}
                      </h3>
                      <p className="font-medium text-black text-[22px] font-['Poppins',Helvetica]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Exclusive Offer Section */}
            <ExclusiveOfferSection />

            {/* Designer Clothes Section Component */}
            <DesignerClothesSection />
          </div>
        </div>
      </div>
    </div>
  );
};
