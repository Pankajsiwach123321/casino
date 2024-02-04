import React from "react";
import Button from "./Button";

const Hwadercontent = () => {
  return (
    <div className=" grow flex justify-center items-center max-lg:py-[70px]">
      <div
        data-aos="fade-down"
        data-aos-delay="100"
        className=" max-w-[1140px] mx-auto px-3"
      >
        <h1 className=" font-normal  sm:text-[72px] text-[42px] leading-[48px] sm:leading-[86px] text-center mx-auto max-w-[505px] font-anten text-white">
          Exclusive Games. Pasión por ganar
        </h1>
        <p className=" font-medium font-inter text-base leading-[25px] text-center mx-auto pt-[16px] text-[#cccfd1] max-w-[727px]">
          En Exclusive Games somos un equipo apasionado de personas dedicados al
          desarrollo de multiplataformas para juegos de azar. A lo largo de
          nuestra vida consumimos todo tipo de juegos hasta que un día decidimos
          crear los propios.
        </p>
        <div className=" flex justify-center">
          <Button
            text="Empezar"
            mainclass="after:content-[url(./assets/image/arrow2.png)] hover:bg-[linear-gradient(306.99deg,#51C8EF_102%,#7AF57A_-13.02%)] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] hover:!text-white !text-black border-0 mt-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hwadercontent;
