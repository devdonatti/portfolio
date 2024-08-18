import React from 'react';
import './index.css';  
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import PieFooter from './components/PieFooter';


function App() {
  return (
    <div className='bg-slate-900'>
      <Navbar/>
      <Banner/>
      <SobreMi/>
      <Habilidades/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
      <PieFooter/>
     
    </div>
  );
}

export default App;
