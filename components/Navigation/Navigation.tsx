// Navigation.tsx
import React, { useState } from "react";

interface NavigationProps {
  links: {
    name: string;
    url: string;
  }[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white w-full ">
      <div className="flex items-center justify-between mt-6  ">
        <h1 className="font-bold text-xl ml-2 md:ml-10 md:text-2xl">
          Kreativat
        </h1>
        <div className="md:hidden absolute right-4 z-20">
          <button type="button" className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute  text-white w-full md:relative  md:flex md:items-center md:w-auto top-0 z-10 bg-gray-800 md:bg-transparent md:justify-between md:flex-1  pt-10  md:pt-0 md:mx-3    h-full`}
        >
          <ul className="pt-2 md:flex  md:gap-2 lg:gap-3 md:ml-10 lg:ml-24  md:items-center md:justify-between md:space-x-4 p-3 md:p-0">
            {links.map((link, index) => (
              <li key={index} className="md:m-0 mt-2 mb-2">
                <a
                  href={link.url}
                  className="block px-2 py-1 md:p-2 rounded  hover:underline  uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex  justify-around md:justify-between gap-10 mx-5 mt-3 md:mt-0">
            <button className="border-none bg-none text-white">Kyqu</button>
            <button className="p-3 text-black bg-white"> Regjistrohu</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
