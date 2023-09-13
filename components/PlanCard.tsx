"use client";

import { CustomButton } from ".";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

type planDetailsProps = {
  contains: boolean;
  detail: string;
};

type PlanProps = {
  type: string;
  price: number;
  details: planDetailsProps[];
};
const PlanCard = ({ plan }: { plan: PlanProps }) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  const handleHover = () => {
    setOnHover((prev) => !prev);
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ ease: "easeIn", delay: 0.3, duration: "0.3" }}
      viewport={{ once: true }}
      className="plan-card"
    >
      <div className="flex flex-col ">
        <span className="text-green capitalize text-sm">pase</span>
        <h4 className="text-white font-black text-[40px] uppercase  md:mb-2 ">
          {plan.type}
        </h4>
        <span className="text-white font-thin text-3xl uppercase mb-6">
          $ {plan.price}
        </span>
        <div
          className="w-full"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <CustomButton
            text="Comprar"
            style="w-[110px] h-[32px] text-[12px] border-green border-2 rounded-md font-semibold text-white mb-4 duration-300"
          />
        </div>
        <ul className="space-y-2 pt-6 ">
          {plan.details.map((item, i) => (
            <li key={i} className="text-white tracking-wide ">
              {item.detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PlanCard;
