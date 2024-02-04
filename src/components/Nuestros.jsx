import React from "react";
import { Blub, Innovation, Prodactive } from "../assets/svg/icon";
import lineone from "../assets/image/lineone.png";
import linetwo from "../assets/image/linetwo.png";
import jetx from "../assets/image/jetx.webp";
import joker from "../assets/image/joker.webp";
import lucky from "../assets/image/luckyfortune.webp";
import helosummer from "../assets/image/hellosummer.webp";
import casino from "../assets/image/casino.webp";
import teddy from "../assets/image/starteddy.webp";
import Button from "./Button";
const nutestros = [
  {
    svg: <Blub />,
    titel: `Inteligencia`,
    para: "Comprendemos a la perfección los gustos de las personas y el mundo del gaming.",
    aos: "fade-right",
  },
  {
    svg: <Prodactive />,
    titel: `Proactividad`,
    para: "Somos creadores de cambios que exploran nuevas formas de entretenimiento.",
    aos: "fade-down",
  },
  {
    svg: <Innovation />,
    titel: `Innovación`,
    para: "Pensamos fuera de la caja para estar siempre un paso adelante.",
    aos: "fade-left",
  },
];
const jugardata = [
  {
    img: jetx,
    aos: "flip-left",
  },
  {
    img: joker,
    aos: "flip-up",
  },
  {
    img: teddy,
    aos: "flip-right",
  },
  {
    img: lucky,
    aos: "flip-left",
  },
  {
    img: helosummer,
    aos: "flip-up",
  },
  {
    img: casino,
    aos: "flip-right",
  },
];
const Nuestros = () => {
  const nuestron = nutestros.map((e, index) => (
    <div
      key={index}
      className="sm:w-1/3  w-full px-3 sm:max-w-[287px] mt-[30px] "
    >
      <div data-aos={e.aos} className=" h-full ">
        <span className=" text-center mx-auto flex justify-center bg-[#f5fff5] p-[26px] max-w-[100px] max-h-[100px] rounded-[73px]">
          {e.svg}
        </span>
        <p className=" font-anten font-normal text-xl leading-[26px] text-center pt-4">
          {e.titel}
        </p>
        <p className=" text-base leading-[26px] text-center font-medium font-inter mx-auto pt-[10px]">
          {e.para}
        </p>
      </div>
    </div>
  ));
  const jugar = jugardata.map((e, index) => (
    <div key={index} className="md:w-1/3 sm:w-1/2 w-full  px-3 pt-6">
      <div
        data-aos={e.aos}
        className=" bg-transparent hover:bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] duration-300 p-[1px] rounded-[8px]"
      >
        <div className=" relative z-[1] group overflow-hidden  rounded-[8px]">
          <img src={e.img} alt="jetx" className=" w-full h-ful" />
          <div className="bg-[#000000B8] group-hover:opacity-100 group-hover:scale-100 scale-0 opacity-0 duration-300 w-full h-full flex justify-center items-center absolute left-0 top-0">
            <Button
              text="Jugar"
              mainclass="after:content-[url(./assets/image/arrow.png)]"
            />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className=" relative z-[1]">
      <div className=" max-sm:bg-white sm:bg-[url(./assets/image/bg-white.png)] bg-no-repeat bg-100% py-[50px] sm:py-[243px] mt-[50px] sm:mt-[100px] relative z-[1]">
        <div className=" max-w-[1140px] mx-auto px-3">
          <h2
            data-aos="fade-down"
            className=" text-[#00141B] text-[23px] sm:text-[48px] leading-[57px] text-center font-normal font-anten"
          >
            Nuestros Atributos de Marca
          </h2>
          <div className="row pt-[30px] relative z-[1] justify-between">
            {nuestron}

            <img
              src={lineone}
              data-aos="zoom-in-up"
              alt="lineone"
              className=" absolute hidden sm:block left-[18%] top-[23%]  z-[-1] max-w-[235px] md:max-w-[273px] max-h-[42px]"
            />
            <img
              src={linetwo}
              data-aos="zoom-in-up"
              alt="linetwo"
              className=" absolute hidden sm:block right-[18%] top-[38%] z-[-1]  max-w-[235px] md:max-w-[273px] max-h-[42px]"
            />
          </div>
          <h2
            data-aos="fade-down"
            className=" text-[#00141B] text-[36px] sm:text-[48px] leading-[57px] text-center font-normal font-anten pt-[55px] sm:pt-[150px]"
          >
            Slots
          </h2>
          <p
            data-aos="fade-up"
            className=" text-[#334349] font-inter  text-base leading-[25px]  text-center font-medium max-w-[904px] mx-auto pt-4"
          >
            En Exclusive Games, ofrecemos una selección de más de 600 juegos de
            los principales desarrolladores, como Aristocrat, Amatic, EGT,
            Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
            trabaja incansablemente para innovar y ampliar nuestra oferta de
            experiencias, garantizando la máxima seguridad con operaciones
            protegidas por cifrado SSL de 256 bits.
          </p>
          <div className="row pt-[36px]">{jugar}</div>
          <div className=" flex justify-center">
            <Button
              text="Mostrar"
              mainclass="after:content-[url(./assets/image/arrow2.png)] hover:bg-[linear-gradient(306.99deg,#51C8EF_102%,#7AF57A_-13.02%)] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] hover:!text-white !text-black border-0 mt-[40px]"
            />
          </div>
        </div>
      </div>
      <div className=" absolute max-w-[484px] max-h-[484px] w-full h-full bottom-[-1%] md:bottom-[1%]  left-[-17%] z-[-1] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[179px] opacity-[0.5]  "></div>
    </div>
  );
};

export default Nuestros;
