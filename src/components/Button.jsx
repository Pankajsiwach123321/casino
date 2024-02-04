import React from "react";

const Button = (props) => {
  return (
    <button
      className={` relative after:absolute after:w-[104px] after:h-[26px]  after:-left-[6px] after:-bottom-1   p-[10px_36px] sm:p-[13px_46px] rounded-[41px] border-white border text-white hover:text-black duration-300 hover:bg-white font-bold text-base leading-[25px] ${props.mainclass} `}
    >
      {props.text}
    </button>
  );
};

export default Button;
