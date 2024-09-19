import React from "react";
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <div
      id="Proyectos"
      className="p-5 md:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-4xl md:text-6xl font-semibold mb-8 p-4 leading-tight font-mono uppercase text-fuchsia-600"
      >
        Proyectos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around gap-10 text-white">
        {[
          {
            title: "Ecommerce Smile",
            imgSrc: "/proyecto1.png",
            detailsLink: "/detalles/1",
            demoLink: "https://ecommerce-clothing-smile.netlify.app/",
          },
          {
            title: "Blog",
            imgSrc: "/vista-app-blog.png",
            detailsLink: "/detalles/2",
            demoLink: "https://tailwind-proyect.netlify.app/",
          },
          {
            title: "Aplicación Clima",
            imgSrc: "/vista-app-clima.png",
            detailsLink: "/detalles/3",
            demoLink: "https://app-buscador-clima.netlify.app/",
          },
          {
            title: "Ecommerce Food",
            imgSrc: "/vista-app-ecommerce-food.png",
            detailsLink: "/detalles/4",
            demoLink: "https://ecommerce-food.netlify.app/",
          },
          {
            title: "Login con Firebase",
            imgSrc: "/vista-app-login.png",
            detailsLink: "/detalles/5",
            demoLink: "https://login-firebaseauth.netlify.app/login",
          },
          {
            title: "Turnos de Masajes",
            imgSrc: "/vista-app-turnos-masajes.png",
            detailsLink: "/detalles/6",
            demoLink: "https://reserva-turnos-masajes.netlify.app/",
          },
        ].map((proyecto, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="p-2 text-center leading-tight font-mono uppercase">
              {proyecto.title}
            </h2>
            <img
              data-aos="fade-down"
              className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md border-2 border-fuchsia-800 b_glow"
              src={proyecto.imgSrc}
              alt={proyecto.title}
            />
            <div className="flex gap-4 justify-center p-2 leading-tight font-mono uppercase">
              <Link target="_blank" to={proyecto.detailsLink}>
                Detalles |
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={proyecto.demoLink}
              >
                Ver Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      <h1
        data-aos="fade-right"
        className="text-4xl md:text-6xl font-semibold mb-8 p-4 leading-tight font-mono uppercase text-fuchsia-600"
      >
        Colaboraciones
      </h1>
      <div className="flex flex-col items-center">
        <h2 className="p-2 text-center leading-tight font-mono uppercase text-white">
          Ecommerce Libros Infantiles
        </h2>
        <img
          data-aos="fade-down"
          className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md border-2 border-fuchsia-800 b_glow"
          src="/vista-app-libros.png"
          alt="Ecommerce Libros Infantiles"
        />
        <div className="flex gap-4 justify-center p-2 leading-tight font-mono uppercase text-white">
          <Link to="/detalles/7">Detalles |</Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reserva-turnos-masajes.netlify.app/"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
