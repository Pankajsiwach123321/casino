import React, { useState } from "react";
import logo from "../assets/image/logo.webp";
import Button from "./Button";
const NavBar = () => {
  const [navshow, setnavshow] = useState(false);
  function show() {
    setnavshow(!navshow);
  }
  function hide() {
    setnavshow(false);
  }
  if (navshow === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <div>
      <nav className="py-[19px] bg-[#ffffff1a] backdrop:blur-[10px]">
        <div className=" max-w-[1140px] mx-auto px-3">
          <div>
            <div className=" flex justify-between items-center max-sm:gap-[12px]">
              <ul className=" flex xl:gap-[101px] gap-[50px] items-center">
                <li>
                  <a href="#">
                    <img src={logo} alt="logo" className="h-[43px] w-[210px]" />
                  </a>
                </li>
                <li
                  className={`${
                    navshow ? "max-lg:left-0" : "max-lg:left-[-100%]"
                  } flex gap-[28px] items-center mobileView`}
                >
                  <a
                    onClick={hide}
                    href="#Hogar"
                    className=" font-inter text-base dont-medium text-white leading-[26px] navhover"
                  >
                    Hogar
                  </a>
                  <a
                    onClick={hide}
                    href="#Mision"
                    className=" font-inter text-base dont-medium text-white leading-[26px] navhover"
                  >
                    Misión
                  </a>
                  <a
                    onClick={hide}
                    href="#Tragamonedas"
                    className=" font-inter text-base dont-medium text-white leading-[26px] navhover"
                  >
                    Tragamonedas
                  </a>
                  <a
                    onClick={hide}
                    href="#JackPot"
                    className=" font-inter text-base dont-medium text-white leading-[26px] navhover"
                  >
                    Por qué elegirnos
                  </a>
                  <a
                    onClick={hide}
                    href="#Ofertas"
                    className=" font-inter text-base dont-medium text-white leading-[26px] navhover"
                  >
                    Ofertas
                  </a>
                </li>
              </ul>
              <div className=" flex gap-[12px]">
                <ul>
                  <Button
                    text="Acceso"
                    mainclass="after:content-[url(./assets/image/arrow.png)]"
                  />
                </ul>
                <a
                  href="#"
                  onClick={show}
                  className={`${
                    navshow ? "rotate-0" : "!rotate-90"
                  }  text-white text-[25px] block lg:hidden duration-300 font-extrabold relative z-[12]`}
                >
                  {navshow ? "x" : "|||"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
