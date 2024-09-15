import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div className="px-4 lg:px-56 lg:py-0 py-20 flex lg:flex-row flex-col-reverse justify-between items-center overflow-hidden">
      <div className="lg:w-3/4 w-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-center lg:text-left text-fuchsia-600 gap-8">
        <h1
          data-aos="fade-right"
          className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight font-mono uppercase"
        >
          MICAELA DONATTI{" "}
          <span className="text-white">Desarrolladora Frontend</span>
        </h1>

        <div className="flex mt-8 gap-4 justify-center lg:justify-start">
          <a
            href=""
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <AiFillGithub className="text-[28px]" />
          </a>
          <a
            href=""
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaLinkedin className="text-[28px]" />
          </a>
          <a
            href=""
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaInstagram className="text-[28px]" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/1164609581?text=Hola,%20me%20interesa%20tu%20portfolio."
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaWhatsapp className="text-[28px]" />
          </a>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src="/logo4.png"
        width={400}
        height={400}
        className="lg:w-1/3 w-2/3 max-w-full h-auto m-4"
        alt="Logo"
      />
    </div>
  );
};

export default Banner;
