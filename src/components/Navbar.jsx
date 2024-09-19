// Navbar.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-4">
        <ScrollLink spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Home
          </li>
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} to="SobreMi">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Sobre mi
          </li>
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} to="Proyectos">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Proyectos
          </li>
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} to="Habilidades">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Habilidades
          </li>
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} to="Contacto">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Contacto
          </li>
        </ScrollLink>
      </ul>
    </div>
  );

  return (
    <nav className="bg-slate-900 fixed top-0 left-0 w-full">
      <div className="h-16 flex items-center justify-between z-50 text-white lg:py-5 px-6 border-b border-slate-800">
        <RouterLink to="/" className="flex items-center">
          <img
            src="/logo4.png"
            alt="Logo"
            className="h-12 lg:h-16 object-contain" // Ajusta la altura según el diseño
          />
        </RouterLink>
        <div className="lg:flex hidden items-center">
          <ul className="flex gap-8 text-[18px]">
            <ScrollLink spy={true} smooth={true} to="Home">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Home
              </li>
            </ScrollLink>
            <ScrollLink spy={true} smooth={true} to="SobreMi">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Sobre mi
              </li>
            </ScrollLink>
            <ScrollLink spy={true} smooth={true} to="Proyectos">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Proyectos
              </li>
            </ScrollLink>
            <ScrollLink spy={true} smooth={true} to="Habilidades">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Habilidades
              </li>
            </ScrollLink>
            <ScrollLink spy={true} smooth={true} to="Contacto">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Contacto
              </li>
            </ScrollLink>
          </ul>
        </div>
        <button className="block lg:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
        {click && content}
      </div>
    </nav>
  );
};

export default Navbar;
