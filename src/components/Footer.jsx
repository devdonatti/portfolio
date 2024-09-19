import React from "react";
import { FaGithub, FaLinkedin, FaVoicemail, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto lg:px-24 px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="mb-4 md:mb-0 flex items-center">
          <img src="/logo4.png" className="h-24 w-auto" alt="Logo" />
        </div>
        {/* Servicios */}
        <div>
          <h2 className="text-lg font-semibold text-fuchsia-600 py-2 uppercase">
            Servicios
          </h2>
          <ul className="space-y-2">
            <li>Desarrollo Web</li>
            <li>Diseño Web</li>
            <li>E-commerce</li>
            <li>SEO</li>
          </ul>
        </div>
        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold text-fuchsia-600 py-2 uppercase">
            Contacto
          </h2>
          <p className="text-sm my-2">
            Email:{" "}
            <a
              href="mailto:mdonattiprogramacion@gmail.com"
              className="hover:underline"
            >
              mdonattiprogramacion@gmail.com
            </a>
          </p>
          <p className="text-sm my-2">Teléfono: 116460-9581</p>
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
              href="https://linkedin.com/in/tu-perfil"
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
      <section className="bg-fuchsia-800 text-white text-center py-4">
        <h1>
          Desarrollado por <strong>Micaela Donatti</strong>
        </h1>
      </section>
    </footer>
  );
};

export default Footer;
