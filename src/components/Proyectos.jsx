import React from "react";

const Proyectos = () => {
  return (
    <div
      id="Proyectos"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Proyectos
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 text-white">
        <div>
          <h2 className="p-4 text-center">Ecommerce Smile</h2>
          <img
            data-aos="fade-down"
            height={500}
            width={500}
            className=" uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow"
            src="/proyecto1.png"
            alt=""
          />
          <div className="flex gap-4 justify-center p-4">
            <a href="">Ver detalles</a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ecommerce-clothing-smile.netlify.app/"
            >
              Ver Demo
            </a>
          </div>
        </div>

        <div>
          <h2 className="p-4 text-center">Blog</h2>
          <img
            data-aos="fade-down"
            height={500}
            width={500}
            className=" uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow"
            src="/vista-app-blog.png"
            alt=""
          />
          <div className="flex gap-4 justify-center p-4">
            <a href="">Ver detalles</a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwind-proyect.netlify.app/"
            >
              Ver Demo
            </a>
          </div>
        </div>
        <div>
          <h2 className="p-4 text-center">
            Aplicacion Busqueda del clima por ciudad{" "}
          </h2>
          <img
            data-aos="fade-down"
            height={500}
            width={500}
            className=" uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow"
            src="/vista-app-clima.png"
            alt=""
          />
          <div className="flex gap-4 justify-center p-4">
            <a href="">Ver detalles</a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app-buscador-clima.netlify.app/"
            >
              Ver Demo
            </a>
          </div>
        </div>
        <div>
          <h2 className="p-4 text-center">Ecommerce Food</h2>
          <img
            data-aos="fade-down"
            height={500}
            width={500}
            className=" uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow"
            src="/vista-app-ecommerce-food.png"
            alt=""
          />
          <div className="flex gap-4 justify-center p-4">
            <a href="">Ver detalles</a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ecommerce-food.netlify.app/"
            >
              Ver Demo
            </a>
          </div>
        </div>
        <div>
          <h2 className="p-4 text-center">Login con Firebase</h2>
          <img
            data-aos="fade-down"
            height={500}
            width={500}
            className=" uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow"
            src="vista-app-login.png"
            alt=""
          />
          <div className="flex gap-4 justify-center p-4">
            <a href="">Ver detalles</a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://login-firebaseauth.netlify.app/login"
            >
              Ver Demo
            </a>
          </div>
        </div>
        <div>
          <h2 className="p-4 text-center">Turnos de masajes</h2>
          <img
            data-aos="fade-down"
            height={500}
            width={500}
            className=" uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow"
            src="/vista-app-turnos-masajes.png"
            alt=""
          />
          <div className="flex gap-4 justify-center p-4">
            <a href="">Ver detalles</a>
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
    </div>
  );
};

export default Proyectos;
