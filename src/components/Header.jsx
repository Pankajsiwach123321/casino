import React from "react";
import NavBar from "./NavBar";
import Hwadercontent from "./Hwadercontent";
// import headerimg from '.'
const Header = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/image/headerimg.webp)] bg-no-repeat bg-cover lg:min-h-screen flex flex-col">
        <NavBar />
        <Hwadercontent />
      </div>
    </div>
  );
};

export default Header;
