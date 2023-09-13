import React from "react";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="text-center mb-20">
      <h3 className="text-5xl text-white uppercase inline relative space-y-4 border-b-2 border-green pb-4 ">
        {text}
      </h3>
    </div>
  );
};

export default Title;
