"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { carruselImages } from "@/constants";
import { useEffect, useState } from "react";

const SwiperContainer = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   // Función para actualizar el ancho de la ventana cuando cambie el tamaño de la pantalla
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // Agregar un evento para escuchar los cambios en el tamaño de la pantalla
  //   window.addEventListener("resize", handleResize);

  //   // Limpieza del evento cuando se desmonte el componente
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente

  // console.log(windowWidth);
  return (
    <section>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        autoplay={true}
        className=" md:container  overflow-visible md:min-h-screen "
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1460: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {carruselImages.map((item) => (
          <SwiperSlide>
            {({ isNext, isActive }) => (
              <div className={`slick-card ${isNext && "active"} `}>
                <figure
                  className={`relative mb-8  border-green border-2 rounded-md m-0 ${isNext} h-[280px] w-[440px] ${
                    isNext && "active"
                  } `}
                >
                  <Image
                    src={item.img}
                    alt={`${item.title} preview`}
                    width={448}
                    height={468}
                    className={` ${
                      isActive
                        ? "mt-2 p-4"
                        : isActive
                        ? "ml-[-20px] mt-[-40px]"
                        : "ml-[20px] mt-[-40px]"
                    } duration-150 delay-75`}
                  />
                </figure>
                <div className="text-white text-center mt-6">
                  <h4 className="text-4xl font-black uppercase mb-4">
                    {item.title}
                  </h4>

                  <p
                    className={`${
                      isActive ? "opacity-90" : "opacity-0"
                    }  delay-300  duration-100 text-[14px]`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperContainer;
