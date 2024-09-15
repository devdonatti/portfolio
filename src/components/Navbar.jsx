import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition ">
      <ul className="text-center text-xl p-4">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Home
          </li>
        </Link>
        <Link spy={true} smooth={true} to="SobreMi">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Sobre mi
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Proyectos">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Proyectos
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Habilidades">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Habilidades
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Contacto">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Contacto
          </li>
        </Link>
      </ul>
    </div>
  );
  return (
    <nav>
      <div className="h-16 flex items-center justify-between z-50 text-white lg:py-5 px-6 border-b border-slate-800">
        <div className="flex items-center">
          <img
            src="/logo1.png"
            alt="Logo"
            className="h-36 w-32 object-cover mt-4 overflow-hidden  "
          />
        </div>
        <div className="lg:flex hidden items-center">
          <ul className="flex gap-8 text-[18px]">
            <Link spy={true} smooth={true} to="Home">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} to="SobreMi">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Sobre mi
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Proyectos">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Proyectos
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Habilidades">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Habilidades
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contacto">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Contacto
              </li>
            </Link>
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
