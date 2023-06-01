import React from "react";

const Header = () => {
  return (
    <div className="text-white flex justify-between items-center px-8 mt-6">
      <div className="flex justify-between items-center gap-12">
        <div className="logo text-lg font-bold">
          <p>Kreativat</p>
        </div>
        <ul className="flex justify-around gap-9">
          <li>
            <a href="/me-te-rejat">Më të rejat</a>
          </li>
          <li>
            <a href="/komuniteti">Komuniteti</a>
          </li>
          <li>
            <a href="/event">Evente</a>
          </li>
          <li>
            <a href="/projecktet">Projektet</a>
          </li>
          <li>
            <a href="/projektet">Kerko Pune</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between gap-10">
        <button className="border-none bg-none text-white">Kyqu</button>
        <button className="p-3 text-black bg-white"> Regjistrohu</button>
      </div>
    </div>
  );
};

export default Header;
