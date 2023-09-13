"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

import { About, Plans, Profesionals } from "@/components";

import { carruselImages, icons, menuLinks } from "@/constants";
import { Element, Link } from "react-scroll";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";

import SwiperContainer from "@/components/SwiperContainer";
import Instagram from "@/components/icons/Instagram";
import Facebook from "@/components/icons/Facebook";
import Twitter from "@/components/icons/Twitter";
import Whatsapp from "@/components/icons/Whatsapp";

const socialIcons = [
  {
    id: 1,
    icon: <Instagram />,
  },
  {
    id: 2,
    icon: <Facebook />,
  },
  {
    id: 3,
    icon: <Twitter />,
  },
  {
    id: 4,
    icon: <Whatsapp />,
  },
];

export default function Home() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <section className="overflow-x-hidden">
      <Element name="home">
        <section className="container mb-10 ">
          <Navbar />

          <nav className="fixed bottom-0 left-0  w-full z-50">
            <div className="hidden md:block">
              <ul className="flex-center gap-4 text-xl py-6 font-semibold uppercase bg-green ">
                {menuLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.link}
                    spy={true}
                    smooth={true}
                    duration={100}
                    delay={100}
                    onClick={closeMenu}
                    className="cursor-pointer"
                  >
                    <li className="">
                      {link.text}
                      {i !== menuLinks.length - 1 && " /"}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className=" bg-green md:bg-black h-16 w-full"></div>
            <div className="md:hidden absolute w-full bottom-3">
              <MobileMenu />
            </div>
          </nav>

          <div className=" min-height-mobile  md:min-height md:flex items-center  ">
            <div className="mx-auto  max-w-[344px] md:max-w-[800px] text-center md:text-left   ">
              <h1 className=" text-white text-[46px] mt-[184px] md:mt-0  md:text-[110px] font-black uppercase animate-text  md:leading-[120px] mb-2 md:mb-6">
                Enfrentá tus límites
              </h1>
              <p className="text-[10px]  md:text-[20px] uppercase text-dark-green animate-subt">
                y crece en fuerza, diciplina y motivacion
              </p>
            </div>
            <div className="relative">
              <Image
                className="absolute bottom-10 right-[-20px]"
                src="/lines.png"
                alt="frame"
                width={900}
                height={900}
              />
              <Image
                className="animate-image mt-10 "
                src="/hero.png"
                alt="models"
                width={748}
                height={100}
              />
            </div>
          </div>
        </section>
      </Element>

      <Element name="profesionals">
        <Profesionals />
      </Element>

      <Element name="plans">
        <Plans />
      </Element>

      <Element name="gym">
        <About
          title="Gimnasio"
          text="En Physical Point Gym, nuestro compromiso es ayudarte a alcanzar tus metas de bienestar y a vivir una vida más saludable y en forma. Nos enorgullecemos de ofrecer un ambiente acogedor y motivador para que puedas entrenar de manera segura y eficiente."
          image="/gym.jpg"
        />
      </Element>

      <Element name="clases">
        <SwiperContainer />
      </Element>

      <Element name="contact">
        <About
          title="Contacto"
          text="En Physical Point Gym, nuestro compromiso es ayudarte a alcanzar tus metas de bienestar y a vivir una vida más saludable y en forma. Nos enorgullecemos de ofrecer un ambiente acogedor y motivador para que puedas entrenar de manera segura y eficiente."
          image="/map.jpg"
          icons={socialIcons}
        />
      </Element>
    </section>
  );
}
