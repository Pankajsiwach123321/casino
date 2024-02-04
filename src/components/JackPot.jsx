import React from "react";
import jackpot from "../assets/image/jackpot.webp";
import { Tick } from "../assets/svg/icon";
import platleft from "../assets/image/PlatformaImgLeft.webp";
import platright from "../assets/image/PlataformaRightImg.webp";
import ezugli from "../assets/image/ezugi.webp";
import roultets from "../assets/image/roultes.png";
import betting from "../assets/image/livebeeting.webp";
import Button from "./Button";
const vivodata = [
  {
    img: ezugli,
    aos: "flip-left",
  },
  {
    img: roultets,
    aos: "flip-up",
  },
  {
    img: betting,
    aos: "flip-right",
  },
];
const JackPot = () => {
  const vivo = vivodata.map((e, index) => (
    <div key={index} className="md:w-1/3 sm:w-1/2 w-full  px-3 pt-6">
      <div
        data-aos={e.aos}
        className="hover:shadow-[7px_9px_15px_0px_#00000033] duration-300 p-[1px] rounded-[8px]"
      >
        <div className=" relative z-[1] group overflow-hidden  rounded-[8px]">
          <img src={e.img} alt="jetx" className=" w-full h-ful" />
          <div className="bg-[#000000B8] group-hover:opacity-100 group-hover:scale-100 scale-0 opacity-0 duration-300 w-full h-full flex justify-center items-center absolute left-0 top-0">
            <Button
              text="Reproducir"
              mainclass="after:content-[url(./assets/image/arrow.png)]"
            />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="bg-[url(./assets/image/bg-jackpot.webp)] bg-100% bg-no-repeat relative z-[1] overflow-x-clip">
      <div className=" max-w-[1140px] mx-auto px-3 py-[45px] sm:py-[100px]">
        <div className="row">
          <div
            data-aos="fade-right"
            className="sm:w-1/2 w-full px-3 flex justify-start"
          >
            <img
              src={jackpot}
              alt="jackpot"
              className=" max-w-[550px] w-full rounded-[16px]"
            />
          </div>
          <div
            data-aos="fade-left"
            className="sm:w-1/2 w-full max-sm:pt-6 px-3 flex flex-col justify-center"
          >
            <h2 className=" font-anten text-[24px] md:text-[28px] lg:text-[40px] xl:text-[48px] font-normal leading-[57px] text-white">
              Potenciando sus elecciones
            </h2>
            <p className=" text-base leading-[25px] font-medium font-inter pt-[16px] text-[#CDD1D2] mb-3">
              Con Exclusive Game lo mejor está de tu lado.
            </p>
            <div className=" flex items-start gap-2 pt-3">
              <span className=" flex pt-2 items-center justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2]">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
            </div>
            <div className=" flex items-start gap-2 pt-3">
              <span className=" flex items-center pt-2 justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2]">
                Versión PC y móvil
              </p>
            </div>
            <div className=" flex items-start gap-2 pt-3">
              <span className=" flex items-center pt-2 justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] max-w-[380px]">
                Bonos editables, happy hours, Jackpots, códigos promocionales..
              </p>
            </div>
            <div className=" flex items-start gap-2 pt-3">
              <span className=" flex items-center pt-2 justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2]">
                Aplicación para android y windows de regalo.
              </p>
            </div>
            <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] pt-6">
              Te reintegramos todo lo invertido en fichas en la moneda que
              elijas.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className=" lg:px-[261px] max-sm:p-[20px] overflow-hidden sm:px-[24px] md:px-[96px] py-[96px] border-[0.5px] backdrop-blur-[29px] mix-blend-lighten border-white rounded-[16px] mt-[70px] md:mt-[150px] relative z-1"
        >
          <p className=" font-normal text-[24px] sm:text-[48px] font-anten leading-[40px] sm:leading-[56px] text-center text-white">
            lanza tu propia plataforma en sólo 2 semanas
          </p>
          <img
            src={platleft}
            alt="paltleft"
            className=" hidden sm:block absolute left-0 top-0 z-[-1]"
          />
          <img
            src={platright}
            alt="paltright"
            className=" hidden sm:block absolute right-0 bottom-0 z-[-1]"
          />
        </div>
        <h2
          data-aos="fade-down"
          className=" font-normal text-[38px] sm:text-[48px] font-anten leading-[40px] sm:leading-[56px] text-center text-white mt-[70px] sm:mt-[150px]"
        >
          Juegos en vivo
        </h2>
        <div className="row pt-[36px] ">{vivo}</div>
      </div>
      <div className=" absolute max-w-[484px] max-h-[484px] w-full h-full bottom-[6%]  right-[-23%] z-[-1] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[179px] opacity-[0.5]  "></div>
    </div>
  );
};

export default JackPot;
