import React from "react";

const Contacto = () => {
  return (
    <div
      id="Contacto"
      className="p-4 lg:p-20 flex flex-col items-center justify-center bg-gradient-to-r from-slate-800 to-purple-500"
    >
      <h1
        data-aos="fade-left"
        className="text-6xl font-raleway  mb-8 p-4 leading-normal uppercase text-fuchsia-600"
      >
        Contactame
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Nombre"
            type="text"
          />
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Email"
            type="email"
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
          placeholder="Escribe tu mensaje..."
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-4"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
