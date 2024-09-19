import React from "react";

const habilidades = [
  { src: "/html-5.png", alt: "HTML", title: "HTML" },
  { src: "/css.png", alt: "CSS", title: "CSS" },
  { src: "/java3.png", alt: "Javascript", title: "JavaScript" },
  { src: "/react2.png", alt: "React", title: "React" },
  { src: "/tailwind.png", alt: "Tailwind", title: "Tailwind CSS" },
];

const Habilidades = () => {
  return (
    <div
      id="Habilidades"
      className="p-5 m-0 flex flex-col items-center min-h-screen"
    >
      <h2 className="text-6xl font-semibold mb-8 text-fuchsia-600 p-4 leading-tight font-mono uppercase">
        Habilidades
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {habilidades.map((habilidad, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-105 w-64"
          >
            <div className="flex items-center justify-center w-64 h-64 mb-4 overflow-hidden">
              <img
                src={habilidad.src}
                alt={habilidad.alt}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white p-4 leading-tight font-mono uppercase">
              {habilidad.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
