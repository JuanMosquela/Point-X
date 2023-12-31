"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

type Icon = {
  id: number;
  icon: JSX.Element;
};

type AboutProps = {
  title: string;
  text: string;
  image: string;
  icons?: Icon[];
};

const About = ({ title, text, image, icons }: AboutProps) => {
  return (
    <section className="container px-2 min-h-screen  flex  items-center justify-center pb-[86px] ">
      <div className="flex  flex-col-reverse justify-center  flex-wrap  gap-8 text-center md:text-left md:gap-[110px]">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          transition={{ ease: "easeIn", duration: 0.2, delay: 0.2 }}
          className="border-green border-2 rounded-md relative w-full md:w-[600px] h-[200px] md:h-[400px]"
        >
          <Image
            src={image}
            width={600}
            height={400}
            alt="gym"
            className="absolute bottom-[-32px] md:bottom-8 left-0 md:left-8 object-fit "
          />
        </motion.div>

        <motion.div
          // variants={fadeIn("right", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // transition={{ ease: "easeIn", duration: 0.2, delay: 0.6 }}
          className="max-w-[600px] "
        >
          <div className="flex flex-col md:flex-row justify-center items-center  md:gap-8 mb-4 md:mb-8  ">
            <h3 className=" text-[20px] md:text-4xl text-white font-black mb-4 md:mb-0  uppercase">
              {title}
            </h3>
            {icons && (
              <ul className="flex   md:gap-3 items-center">
                {icons.map((item: any, i) => (
                  <motion.li
                    key={i}
                    className="scale-[5px]"
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    transition={{ delay: 0.9, duration: 2 }}
                  >
                    {item.icon}
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-white  text-[12px] max-w-[250px] mx-auto font-semibold  text-center md:text-justify leading-7 md:mb-[20px] mb-10">
            {text}
          </p>
          <Image src="/group.png" width={468} height={285} alt="lines" />
        </motion.div>
      </div>
    </section>
  );
};
export default About;
