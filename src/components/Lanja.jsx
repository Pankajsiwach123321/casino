import React from "react";
import Button from "./Button";
import { Tick } from "../assets/svg/icon";

const Lanja = () => {
  return (
    <div>
      <div className=" max-w-[1140px] mx-auto px-3">
        <div   data-aos="fade-down" className="  bg-[linear-gradient(307deg,#51c8ef0f_-13.72%,#7af57a0f_102.02%)] rounded-[16px] border-[#839090] border-[0.5px]  mt-[60px]">
          <div className="bg-[url(./assets/image/lanzalayer.webp)] relative z-[1] bg-no-repeat p-[32px] sm:p-[104px_32px] bg-100%">
            <h2 className=" font-anten font-normal text-2xl sm:text-[32px] leading-[31px] sm:leading-[41px] text-center text-white">
              Lanza tu propia plataforma en sólo 2 semanas
            </h2>
            <Button
              text="Aprende más"
              mainclass="after:content-[url(./assets/image/arrow2.png)] hover:bg-[linear-gradient(306.99deg,#51C8EF_102%,#7AF57A_-13.02%)] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] text-black border-0 mt-[20px] sm:mt-[40px] flex mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lanja;
