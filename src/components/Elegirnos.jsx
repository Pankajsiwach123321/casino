import React from "react";
import Button from "./Button";
import casinonight from "../assets/image/casinonight.webp";
const Elegirnos = () => {
  return (
    <div className=" relative z-[1]">
      <div className=" max-sm:bg-white sm:bg-[url(./assets/image/bg-white2.png)] bg-no-repeat bg-100% py-[50px] sm:py-[280px]">
        <div className=" max-w-[1140px] mx-auto px-3">
          <div className="row flex-col-reverse sm:flex-row">
            <div className=" sm:w-1/2 w-full px-3 flex flex-col justify-center">
              <h2
                data-aos="fade-down"
                className=" text-[#00141B] text-[36px] md:text-[48px] leading-[57px] font-normal font-anten"
              >
                Por qué elegirnos
              </h2>
              <p
                data-aos="fade-right"
                className=" font-inter font-medium text-base leading-[25px] text-[#334349] pt-4"
              >
                Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
                todo lo invertido en fichas en la moneda que elijas. En
                Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los
                juegos interactivos que más pide la gente. Con Exclusive Games
                empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.
              </p>
              <div data-aos="fade-up">
                <Button
                  text="Aprende más"
                  mainclass="after:content-[url(./assets/image/arrow2.png)] hover:bg-[linear-gradient(306.99deg,#51C8EF_102%,#7AF57A_-13.02%)] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] hover:!text-white !text-black border-0 mt-[24px]"
                />
              </div>
            </div>
            <div data-aos="fade-left" className=" sm:w-1/2 w-full px-3">
              <img
                src={casinonight}
                alt="casinonight"
                className=" w-full h-full rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute max-w-[484px] max-h-[484px] w-full h-full bottom-[-1%] md:bottom-[-10%]  left-[-17%] z-[-1] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[179px] opacity-[0.5]  "></div>
    </div>
  );
};

export default Elegirnos;
