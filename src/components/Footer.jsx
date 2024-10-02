import React from "react";
import { FaGithub, FaLinkedin, FaVoicemail, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white bg-gradient-to-r from-slate-900 to-purple-600 shadow-xl">
      <div className="container mx-auto lg:px-24 px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="mb-4 md:mb-0 flex items-center">
          <img src="/logo021.png" className="h-24 w-auto" alt="Logo" />
        </div>
        {/* Servicios */}
        <div>
          <h2 className="text-lg font-semibold font-raleway text-fuchsia-600 py-2 uppercase">
            Servicios
          </h2>
          <ul className="space-y-2 font-raleway">
            <li>Desarrollo Web</li>
            <li>Diseño Web</li>
            <li>E-commerce</li>
            <li>SEO</li>
          </ul>
        </div>
        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold text-fuchsia-600 py-2 uppercase font-raleway">
            Contacto
          </h2>
          <p className="text-sm my-2 font-raleway">
            EMAIL:{" "}
            <a
              href="mailto:mdonattiprogramacion@gmail.com"
              className="hover:underline font-raleway"
            >
              mdonattiprogramacion@gmail.com
            </a>
          </p>
          <p className="text-sm my-2 font-raleway">TELÉFONO: 116460-9581</p>
        </div>
        {/* Redes Sociales */}
        <div>
          <h2 className="text-lg font-semibold text-fuchsia-600 py-2 uppercase">
            Seguime
          </h2>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-fuchsia-500 transition-colors duration-300"
              href="https://github.com/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              className="text-white hover:text-fuchsia-500 transition-colors duration-300"
              href="https://www.linkedin.com/in/devdonatti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              className="text-white hover:text-fuchsia-500 transition-colors duration-300"
              href="https://wa.me/1164609581"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              className="text-white hover:text-fuchsia-500 transition-colors duration-300"
              href="mailto:mdonattiprogramacion@gmail.com"
              aria-label="Email"
            >
              <FaVoicemail size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <section className="bg-fuchsia-800 text-white text-center py-4 bg-gradient-to-r from-slate-800 ">
        <h1 className="font-raleway">
          Desarrollado por <strong>Micaela Donatti</strong>
        </h1>
      </section>
    </footer>
  );
};

export default Footer;
