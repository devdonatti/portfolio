import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const handleShowPdf = () => {
    setShowPdf(true);
  };

  const handleClosePdf = () => {
    setShowPdf(false);
  };

  return (
    <div className="px-4 lg:px-20 py-20 flex flex-col lg:flex-row justify-between items-center min-h-screen">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-fuchsia-600 gap-8">
        <h1
          data-aos="fade-right"
          className="text-5xl lg:text-7xl font-semibold mb-6 leading-tight font-mono uppercase"
        >
          MICAELA DONATTI <br />
          <span className="text-white text-4xl lg:text-6xl">
            Desarrolladora Frontend
          </span>
        </h1>

        <div className="flex mt-8 gap-4 justify-center lg:justify-start">
          <a
            target="_blank"
            href="https://github.com/devdonatti"
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <AiFillGithub className="text-3xl lg:text-4xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/micaela-donatti-36ab22307/"
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaLinkedin className="text-3xl lg:text-4xl" />
          </a>
          <button
            onClick={handleShowPdf}
            title="Ver CV"
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaDownload className="text-3xl lg:text-4xl" />
          </button>

          <a
            href="#"
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaInstagram className="text-3xl lg:text-4xl" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/1164609581?text=Hola,%20me%20interesa%20tu%20portfolio."
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaWhatsapp className="text-3xl lg:text-4xl" />
          </a>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src="/logo4.png"
        className="lg:w-1/3 w-2/3 max-w-full h-auto m-4"
        alt="Logo"
      />

      {showPdf && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <button
              onClick={handleClosePdf}
              className="absolute top-2 right-2 font-bold bg-white p-2 text-fuchsia-700"
            >
              X
            </button>
            <iframe
              src="cv.pdf" // URL del archivo PDF
              width="100%"
              height="500px"
              title="CV"
            />
            <a
              href="cv.pdf"
              download
              className="mt-4 block text-center text-fuchsia-600"
            >
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
