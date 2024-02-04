import React from "react";
import casinorole from "../assets/image/casinorole.webp";
import { Tick } from "../assets/svg/icon";
import Button from "./Button";
// import roleafter from "../assets/image/roleafter.png";
import coin from "../assets/image/coin.webp";
import heart from "../assets/image/heartA.webp";
import cardA from "../assets/image/cardsA.webp";
import dice from "../assets/image/dice.webp";
import threeseven from "../assets/image/barseven.webp";
const Ofertas = () => {
  return (
    <div className=" relative z-[1] overflow-x-clip">
      <div className=" max-w-[1140px] px-3 mx-auto pt-[50px] md:pt-[150px]">
        <h2
          data-aos="fade-down"
          className=" text-white text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] text-center leading-[57px] font-normal font-anten "
        >
          Nuestras ofertas
        </h2>
        <p
          data-aos="fade-up"
          className=" font-inter font-medium text-base leading-[25px] text-white pt-4 text-center"
        >
          Te ofrecemos las mejores experiencias de juegos para tus clientes.
        </p>
        <div className="bg-[linear-gradient(307deg,#51c8ef0f_-13.72%,#7af57a0f_102.02%)] overflow-hidden rounded-[16px] border-[#839090] border-[0.5px] p-[32px] sm:p-[57px_40px_32px_47px] mt-[60px]">
          <div className="row">
            <div className="lg:w-1/2 w-full max-lg:px-3 lg:ps-3 lg:pe-5 flex items-center justify-center">
              <div data-aos="fade-right" className=" relative z-[1]">
                <img
                  src={casinorole}
                  alt="casinorole"
                  className=" w-full h-full max-h-[413px] "
                />
                <div className=" absolute max-w-[162px] rounded-[162px] max-h-[162px] w-full h-full top-[2%] left-[16%] z-[-1] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[65px]  "></div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-lg:px-3 lg:pe-3 lg:ps-5">
              <h2
                data-aos="fade-down"
                className=" font-anten font-normal text-[32px] leading-[41px] text-white"
              >
                Silver
              </h2>
              <p
                data-aos="fade-left"
                className=" font-inter font-medium text-base leading-[25px] text-[#CDD2D3] pt-4 lg:max-w-[401px]"
              >
                Te ofrecemos las mejores experiencias de juegos para tus
                clientes.
              </p>
              <h2
                data-aos="fade-down"
                className=" text-white text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] leading-[57px] font-normal font-anten pt-8 "
              >
                $5000
              </h2>
              <div
                data-aos="fade-left"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex pt-2 items-center justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] lg:max-w-[388px]">
                  Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                  Cargas manuales
                </p>
              </div>
              <div
                data-aos="fade-left"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex items-center pt-2 justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] lg:max-w-[388px]">
                  Control de RTP (controlás qué porcentaje pagar)
                </p>
              </div>
              <div
                data-aos="fade-left"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex items-center pt-2 justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] lg:max-w-[388px]">
                  Bonos editables, happy hours, Jackpots, códigos
                  promocionales..
                </p>
              </div>
              <div
                data-aos="fade-left"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex items-center pt-2 justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] lg:max-w-[388px]">
                  Aplicación para android y windows de regalo.
                </p>
              </div>
              <div
                data-aos="fade-left"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex items-center pt-2 justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] lg:max-w-[388px]">
                  Tiempo de creación 2 a 3 semanas
                </p>
              </div>
              <div data-aos="fade-up">
                {" "}
                <Button
                  text="Comprar ahora"
                  mainclass="after:content-[url(./assets/image/arrow.png)] mt-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="  bg-[linear-gradient(307deg,#51c8ef0f_-13.72%,#7af57a0f_102.02%)] rounded-[16px] border-[#839090] border-[0.5px]  mt-[60px]">
          <div className="bg-[url(./assets/image/luxurybg.webp)] relative z-[1] bg-no-repeat p-[32px] sm:p-[46px_40px_32px_47px] bg-100%">
            <div className=" max-w-[419px] mx-auto">
              <h2
                data-aos="fade-down"
                className=" font-anten font-normal text-[32px] leading-[41px] text-center text-white"
              >
                Luxury
              </h2>
              <p
                data-aos="fade-down"
                className=" font-inter font-medium text-base leading-[25px] text-[#CDD2D3] pt-4 mx-auto text-center max-w-[391px]"
              >
                lleva tu experiencia de juego al siguiente nivel. Con todas las
                características de la versión Silver y la potencia adicional de
                la tecnología React .
              </p>
              <h2
                data-aos="fade-down"
                className=" text-white text-center text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] leading-[57px] font-normal font-anten pt-8 "
              >
                $9000
              </h2>
              <div
                data-aos="fade-down"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex pt-2 items-center justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] text-center w-full lg:max-w-[388px]">
                  Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                  Cargas manuales
                </p>
              </div>
              <div
                data-aos="fade-down"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex items-center pt-2 justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] text-center w-full lg:max-w-[388px]">
                  Control de RTP (controlás qué porcentaje pagar)
                </p>
              </div>
              <div
                data-aos="fade-down"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex items-center pt-2 justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] text-center w-full lg:max-w-[388px]">
                  Bonos editables, happy hours, Jackpots, códigos
                  promocionales..
                </p>
              </div>
              <div
                data-aos="fade-down"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex items-center pt-2 justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] text-center w-full lg:max-w-[388px]">
                  Aplicación para android y windows de regalo.
                </p>
              </div>
              <div
                data-aos="fade-down"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex items-center pt-2 justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-center w-full text-[#CDD1D2] lg:max-w-[388px]">
                  Tiempo de creación 2 a 3 semanas
                </p>
              </div>
              <div data-aos="fade-down">
                <Button
                  text="Comprar"
                  mainclass="after:content-[url(./assets/image/arrow2.png)] hover:bg-[linear-gradient(306.99deg,#51C8EF_102%,#7AF57A_-13.02%)] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)]  hover:!text-white !text-black border-0 mt-[36px] flex mx-auto"
                />
              </div>
            </div>
            <img
              src={coin}
              alt="coin"
              className=" absolute top-[20px] max-sm:w-[60px] sm:top-[19%] animate-coin lg:left-[21%] left-[22px] sm:left-[4%] md:left-[13%] z-[-1]"
            />
            <img
              src={cardA}
              alt="cardA"
              className=" absolute sm:bottom-[11%] bottom-[7%] left-[12px] md:left-[4%] lg:max-w-[176px] md:max-w-[126px] max-w-[62px] sm:max-w-[90px] lg:left-[13%] z-[-1]"
            />
            <img
              src={heart}
              alt="heart"
              className=" absolute right-[2%] md:max-w-[149px] max-w-[100px] md:right-[10%] max-sm:max-h-[60px] top-[20px] sm:top-[14%] z-[-1]"
            />
            <img
              src={dice}
              alt="dice"
              className=" absolute bottom-[12px] max-sm:max-w-[50px] sm:bottom-[15%] right-[10px] animate-coin sm:right-[7%] lg:right-[17%] z-[-1]"
            />
          </div>
        </div>
        <div className="bg-[linear-gradient(307deg,#51c8ef0f_-13.72%,#7af57a0f_102.02%)] overflow-hiddenqw rounded-[16px] border-[#839090] border-[0.5px] p-[32px] sm:p-[78px_40px_78px_50px] mt-[60px]">
          <div className="row">
            <div className="lg:w-5/12 w-full max-lg:px-3 lg:pe-3 lg:ps-5 flex justify-center flex-col">
              <h2
                data-aos="fade-down"
                className=" font-anten font-normal text-[32px] leading-[41px] text-white"
              >
                Platinum
              </h2>
              <p
                data-aos="fade-right"
                className=" font-inter font-medium text-base leading-[25px] text-[#CDD2D3] pt-4 lg:max-w-[364px]"
              >
                Diseño totalmente personalizado. Contáctanos para un
                presupuesto.
              </p>
              <h2
                data-aos="fade-down"
                className=" text-white text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] leading-[57px] font-normal font-anten pt-8 "
              >
                Consultar precio
              </h2>
              <div
                data-aos="fade-right"
                className=" flex items-start gap-2 pt-3"
              >
                <span className=" flex pt-2 items-center justify-center">
                  <Tick />
                </span>
                <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] lg:max-w-[388px]">
                  Personalizable
                </p>
              </div>
              <div data-aos="fade-up">
                <Button
                  text="Comprar ahora"
                  mainclass="after:content-[url(./assets/image/arrow.png)] mt-5 lg:mt-[40px] "
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="lg:w-7/12 w-full max-lg:px-3 lg:ps-3 lg:pe-5 flex items-center justify-center max-lg:pt-6"
            >
              <div className=" relative z-[1]">
                <img
                  src={threeseven}
                  alt="threeseven"
                  className=" w-full h-full max-h-[419px] "
                />
                <div className=" absolute max-w-[162px] rounded-[162px] max-h-[162px] w-full h-full top-[2%] right-[16%] z-[-1] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[65px]  "></div>

                {/* <img
                  src={roleafter}
                  alt="roleafter"
                  className=" mix-blend-multiply bg-blend-multiply "
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute max-w-[484px] max-h-[484px] w-full h-full bottom-[7%]  left-[-26%] z-[-1] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[179px] opacity-[0.5]  "></div>
      <div className=" absolute max-w-[484px] max-h-[484px] w-full h-full bottom-[-18%]  right-[-36%] z-[-1] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[179px] opacity-[0.5]  "></div>
    </div>
  );
};

export default Ofertas;
