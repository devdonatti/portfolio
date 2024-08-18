import React from 'react'
import img from '../assets/proyecto1.png'

const Proyectos = () => {
  return (
    <div id='Proyectos' className='p-20 flex flex-col items-center justify-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500' >Proyectos</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
            <img data-aos='fade-down'height={500} width={500} className=' uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow' src={img} alt="" />
            <img data-aos='fade-down'height={500} width={500} className=' uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow' src={img} alt="" />
            <img data-aos='fade-down'height={500} width={500} className=' uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow' src={img} alt="" />
            <img data-aos='fade-down'height={500} width={500} className=' uppercase text [26px] flex items-center justify-center   p-1  border-2 border-fuchsia-800 b_glow' src={img} alt="" />
            
        </div> 
    </div>
  )
}

export default Proyectos