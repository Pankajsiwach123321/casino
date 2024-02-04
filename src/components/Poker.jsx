import React from "react";
import poker from "../assets/image/pokerwithfriend.webp";
import avilator from "../assets/image/aviator.webp";
const Poker = () => {
  return (
    <div className=" relative z-[1] overflow-x-clip">
      <div className=" mt-[72px] max-w-[1140px] mx-auto px-3">
        <div className="row flex-col-reverse md:flex-row">
          <div className="md:w-1/2 w-full ps-3 pe-3 md:pe-[32px] max-md:pt-6">
            <img
              data-aos="fade-up-right"
              src={poker}
              alt="poker"
              className="w-full rounded-2xl"
            />
            <h2
              data-aos="fade-right"
              className=" font-anten font-normal leading-[57px] text-[48px] text-white pt-[30px] md:pt-[60px]"
            >
              Nuestra Visión
            </h2>
            <p
              data-aos="fade-right"
              className=" text-base  font-inter font-medium leading-[25px]  text-[#ccd0d2] pt-4 pb-6 max-w-[444px]"
            >
              Nuestra visión es ser líderes indiscutibles en la industria de los
              juegos de azar y llevar nuestra pasión por el entretenimiento más
              allá de las fronteras. Imagina un mundo donde la emoción y la
              diversión no tengan límites, y ese es el mundo que queremos crear
              contigo.
            </p>
            <a
              data-aos="fade-right"
              href="#"
              className="  cursor-pointer font-inter text-[#7AF57A] text-base leading-[25.6px] font-bold"
            >
              Aprende mรกs --{">"}
            </a>
          </div>
          <div className="md:w-1/2 w-full pe-3 ps-3 md:ps-[32px]">
            <div className=" flex flex-col-reverse md:flex-col">
              <div className="max-md:pt-[30px]">
                <h2
                  data-aos="fade-left"
                  className=" font-anten font-normal leading-[57px] text-[48px] text-white"
                >
                  Nuestra Misión
                </h2>
                <p
                  data-aos="fade-left"
                  className=" text-base  font-inter font-medium leading-[25px]  text-[#ccd0d2] pt-4 pb-6 max-w-[444px]"
                >
                  Nuestra misión es simple pero poderosa: proporcionarte la más
                  amplia gama de soluciones de entretenimiento de alta calidad y
                  rentabilidad. Estamos comprometidos a elevar tus expectativas
                  y brindarte experiencias inigualables.
                </p>
                <a
                  data-aos="fade-left"
                  href="#"
                  className="cursor-pointer font-inter text-[#7AF57A] text-base leading-[25.6px] font-bold"
                >
                  Aprende más --{">"}
                </a>
              </div>
              <img
                data-aos="fade-up-left"
                src={avilator}
                alt="poker"
                className="w-full rounded-2xl md:mt-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute max-w-[484px] max-h-[484px] w-full h-full top-[125px] rounded-full z-[-1] left-[-312px] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] blur-[179px] opacity-[0.5]  "></div>
      <div className=" absolute max-w-[100px] max-h-[100px] w-full h-full top-[47%]  left-[47%] z-[-1] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] blur-[65px] opacity-[0.7]  "></div>
      <div className=" absolute max-w-[484px] max-h-[484px] w-full h-full bottom-[-36%] md:bottom-[-74%]  right-[-23%] z-[-2] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[179px] opacity-[0.5]  "></div>
    </div>
  );
};

export default Poker;
