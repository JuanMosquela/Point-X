"use client";

import React from "react";
import { teachers } from "../constants";
import TeacherCard from "./TeacherCard";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Profesionals = () => {
  const settings = {
    // autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    // infinite: true,

    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
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
    <section className="relative min-h-[60vh] md:min-hh-screen md:flex md:justify-center items-center   ">
      <div>
        <Slider {...settings}>
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.name} // Añade una clave única para cada card
              image={teacher.image}
              name={teacher.name}
              type={teacher.type}
            />
          ))}
        </Slider>

        <Image
          src="/lines.png"
          width={600}
          height={600}
          alt="frame"
          className="z-[-1] absolute right-[-80px] top-10"
        />
      </div>
    </section>
  );
};

export default Profesionals;
