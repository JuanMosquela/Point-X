import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type TeacherProps = {
  image: string;
  name: string;
  type: string;
};

const TeacherCard = ({ image, name, type }: TeacherProps) => {
  return (
    <motion.div
      className="relative overflow-hidden group  m-auto  w-[268px]"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ ease: "easeOut", duration: 0.3, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Image
        className="rounded-md w-[268px] h-[360px] object-cover  m-0"
        src={image}
        alt={`${name} profile picture`}
        width={260}
        height={340}
      />
      <div className="triangle"></div>

      <div className="absolute bottom-6 left-[80px] md:left-[20px] group">
        <h4 className="text-white font-black text-2xl uppercase mb-3 max-w-[162px]">
          {name}
        </h4>
        <span className="bg-black  text-white rounded-md px-6 py-2 capitalize">
          {type}
        </span>
      </div>
    </motion.div>
  );
};

export default TeacherCard;
