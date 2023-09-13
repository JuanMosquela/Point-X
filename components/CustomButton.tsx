import React from "react";

type ButtonProps = {
  style: string;
  hover?: boolean;
  text: string;
};

const CustomButton = ({ style, hover, text }: ButtonProps) => {
  return (
    <button
      className={`${style}  ${hover && "bg-green text-black duration-300  "}`}
    >
      <p>{text}</p>
    </button>
  );
};

export default CustomButton;
