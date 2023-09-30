import React from "react";
import Navigation from "../Navigation/Navigation";
import links from "../../utils/app_links";
const Header = () => {
  return (
    <div className="text-white flex justify-between items-center font-bebas-neue lettter  ">
      <Navigation links={links} />
    </div>
  );
};

export default Header;
