import React from "react";
import tripleseven from "../assets/image/tripleseven.webp";
import { Blub2, Currency, Member } from "../assets/svg/icon";
const Razones = () => {
  return (
    <div className="relative z-[1] overflow-x-clip" id="Tragamonedas">
      <div className=" max-w-[1140px] mx-auto px-3 mt-[50px] md:mt-[100px]">
        <div className="row">
          <div className="sm:w-1/2 w-full ps-3 pe-3 sm:pe-5">
            <img
              data-aos="fade-right"
              src={tripleseven}
              alt="tripleseven"
              className=" rounded-[16px] w-full h-full bg-contain"
            />
          </div>
          <div className="sm:w-1/2 w-full pe-3 ps-3 sm:ps-5 max-sm:pt-6">
            <h2
              data-aos="fade-down"
              className=" text-white text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] leading-[57px] font-normal font-anten pb-0 lg:pb-[36px]"
            >
              Más razones para elegirnos
            </h2>
            <div
              data-aos="fade-left"
              className="bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] cursor-pointer group p-[1px] rounded-[16px] w-full h-full max-h-[116px]  sm:max-w-[374px] mt-6"
            >
              <div className="bg-[#051C20]  py-6 pl-3 md:pl-[56px] pr-3 w-full h-full rounded-[15px] ">
                <div className="flex gap-[37px]">
                  <div className=" max-w-[68px] max-h-[68px] rounded-[73px] p-[16px] bg-[#0F2E28]  group-hover:bg-[#79ffc928] duration-300 ">
                    <Blub2 />
                  </div>
                  <div>
                    <p className=" font-anten font-normal text-[32px] leading-[41px] text-white group-hover:text-[#79ffc9] duration-300">
                      200
                    </p>
                    <p className=" font-inter font-medium text-base leading-[25px] text-white group-hover:text-[#79ffc9] duration-300">
                      Páginas creadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] cursor-pointer group p-[1px] rounded-[16px] w-full h-full max-h-[116px]  sm:max-w-[374px] mt-6"
            >
              <div className="bg-[#051C20]  py-6 pl-3 md:pl-[56px] pr-3 w-full h-full rounded-[15px] ">
                <div className="flex gap-[37px]">
                  <div className=" max-w-[68px] max-h-[68px] rounded-[73px] p-[16px] bg-[#0F2E28] group-hover:bg-[#79ffc928] duration-300 ">
                    <Member />
                  </div>
                  <div>
                    <p className=" font-anten font-normal text-[32px] leading-[41px] text-white group-hover:text-[#79ffc9] duration-300">
                      98%
                    </p>
                    <p className=" font-inter font-medium text-base leading-[25px] text-white group-hover:text-[#79ffc9] duration-300">
                      Clientes Satisfechas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] cursor-pointer group p-[1px] rounded-[16px] w-full h-full max-h-[116px]  sm:max-w-[374px] mt-6"
            >
              <div className="bg-[#051C20]  py-6 pl-3 md:pl-[56px] pr-3 w-full h-full rounded-[15px] ">
                <div className="flex gap-[37px]">
                  <div className=" max-w-[68px] max-h-[68px] rounded-[73px] p-[16px] bg-[#0F2E28] group-hover:bg-[#79ffc928] duration-300">
                    <Currency />
                  </div>
                  <div>
                    <p className=" font-anten font-normal text-[32px] leading-[41px] text-white group-hover:text-[#79ffc9] duration-300">
                      200
                    </p>
                    <p className=" font-inter font-medium text-base leading-[25px] text-white group-hover:text-[#79ffc9] duration-300">
                      Divisas Disponibles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute max-w-[484px] max-h-[484px] w-full h-full bottom-[-1%] md:bottom-[-39%]  right-[-28%] z-[-1] bg-[linear-gradient(306.99deg,#51c8ef_-13.72%,#7AF57A_102.02%)] blur-[179px] opacity-[0.5]  "></div>
    </div>
  );
};

export default Razones;
