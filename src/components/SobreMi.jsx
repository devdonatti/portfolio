import React, { useState, useEffect, useRef } from "react";
import img from "../assets/yo.png";

const SobreMi = () => {
  const [showWidget, setShowWidget] = useState(false);
  const widgetRef = useRef(null);

  const handleContinuarClick = () => {
    setShowWidget(true);
  };

  // Cerrar el widget al hacer clic fuera de él
  const handleClickOutside = (event) => {
    if (widgetRef.current && !widgetRef.current.contains(event.target)) {
      setShowWidget(false);
    }
  };

  useEffect(() => {
    // Agregar evento de clic al documento
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Limpiar el evento al desmontar
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="SobreMi"
      className="lg:px-56 px-10 lg:py-0 py-20 text center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        alt=""
      />
      <div className="h-full lg:py-40 flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-6xl font-mono font-semibold mb-8 p-4 leading-normal uppercase text-fuchsia-600"
        >
          Sobre Mi
        </h1>
        <p className="font-mono" data-aos="fade-left">
          Hola, soy Micaela Donatti, una desarrolladora frontend junior de 25
          años, nacida en Buenos Aires, Argentina. Desde chica, siempre he
          tenido una gran pasión por la tecnología y el diseño. Me encanta crear
          experiencias interactivas y visualmente atractivas que ayuden a los
          usuarios a navegar de manera intuitiva. He desarrollado habilidades en
          tecnologías como HTML, CSS, JavaScript, ReactJS y Tailwind CSS. Estoy
          siempre en busca de nuevos desafíos que me permitan crecer
          profesionalmente.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <button
              onClick={handleContinuarClick}
              className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-4 uppercase relative overflow-hidden"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      {showWidget && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-0">
          <div
            ref={widgetRef}
            className="bg-fuchsia-500 p-6 rounded-lg shadow-lg text-black max-w-lg w-full h-[400px] md:h-auto overflow-y-auto relative"
          >
            {/* Botón de cierre para pantallas pequeñas */}
            <button
              onClick={() => setShowWidget(false)}
              className="absolute top-2 right-2 bg-fuchsia-600 text-white rounded-full p-2 hover:bg-fuchsia-800"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">
                  Mis Certificaciones
                </h2>
                <ul className="list-disc list-inside mb-4">
                  <li>Certificación en JavaScript - CoderHouse</li>
                  <li>Certificación en HTML & CSS - CoderHouse</li>
                </ul>
                <h3 className="mt-4 font-semibold">Certificados:</h3>
                <div className="flex flex-wrap mt-2">
                  <img
                    src="/certificados/diplomaDW.png"
                    alt="Certificación 1"
                    className="w-full md:w-64 h-auto object-cover m-2"
                  />
                  <img
                    src="/certificados/diplomaJS.png"
                    alt="Certificación 2"
                    className="w-full md:w-64 h-auto object-cover m-2"
                  />
                </div>
              </div>

              <div className="flex flex-col md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Experiencia</h2>
                <ul className="list-disc list-inside mb-4">
                  <li>Participación en simulación laboral en NoCountry</li>
                </ul>
                <h3 className="mt-4 font-semibold">Certificados:</h3>
                <img
                  src="/certificados/nocountry.jpg"
                  alt="Certificación 2"
                  className="w-full md:w-64 h-auto object-cover m-2"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SobreMi;
