"use client";

import React from "react";
import { trainingPlans } from "@/constants";
import PlanCard from "./PlanCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Plans = () => {
  const settings = {
    // autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    // infinite: true,

    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="min-h-screen md:min-h-screen container md:flex md:justify-center  items-center">
      <div className="flex flex-wrap justify-center gap-8">
        {trainingPlans.map((plan, i) => (
          <PlanCard key={i} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
