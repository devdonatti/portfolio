// App.js
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SobreMi from "./components/SobreMi";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Detalles from "./components/Detalles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-slate-700 min-h-screen">
        <Navbar />

        <Routes>
          {/* Ruta principal con Banner, SobreMi, Habilidades, y Proyectos */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <SobreMi />
                <Habilidades />
                <Proyectos />
                <Contacto />
              </>
            }
          />

          {/* Ruta de detalles con solo el componente Detalles */}
          <Route path="/detalles/:id" element={<Detalles />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
