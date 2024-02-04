import React from "react";
import ciros from "../assets/image/girosgratis.webp";
import money from "../assets/image/moneygame.webp";
import happyhour from "../assets/image/happyhour.webp";
import Button from "./Button";
const jugardata = [
  {
    img: ciros,
    aos: "flip-left",
  },
  {
    img: money,
    aos: "flip-up",
  },
  {
    img: happyhour,
    aos: "flip-right",
  },
];
const Coner = () => {
  const jugar = jugardata.map((e, index) => (
    <div key={index} className="md:w-1/3 sm:w-1/2 w-full  px-3 pt-6">
      <div
        data-aos={e.aos}
        className=" bg-transparent  duration-300  rounded-[8px]"
      >
        <div className=" relative z-[1] group overflow-hidden  rounded-[8px]">
          <img src={e.img} alt="jetx" className=" w-full h-ful" />
          <div className="bg-[#000000B8] group-hover:opacity-100 group-hover:scale-100 scale-0 opacity-0 duration-300 w-full h-full flex justify-center items-center absolute left-0 top-0">
            <Button
              text="Rcasinovip"
              mainclass="after:content-[url(./assets/image/arrow.png)]"
            />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className=" relative z-[1]">
      <div className=" max-w-[1140px] mx-auto px-3 mt-[50px] md:mt-[150px]">
        <h2
          data-aos="fade-down"
          className=" text-center text-xl sm:text-[36px] md:text-[48px] leading-[57px] font-normal font-anten text-white"
        >
          Ellos eligieron apostar con nosotros
        </h2>
        <div className="row sm:pt-[36px] pt-0">{jugar}</div>
        <p
          data-aos="fade-up"
          className=" font-inter font-semibold leading-[25px] text-center text-base text-white pt-[38px] max-w-[883px] mx-auto"
        >
          Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
          de emocionantes experiencias de juego. Ahora, la próxima apuesta está
          en tus manos.
          <br /> Elige ganar. Elige exclusive game.
        </p>
      </div>
    </div>
  );
};

export default Coner;
