import React from 'react'

const Habilidades = () => {
  return (
    <div  id='Habilidades' className='p-20 flex flex-col item-center justify-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Habilidades</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
            <h2 data-aos='fade-up' className=' uppercase text [26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>HTML5</h2>
            <h2 data-aos='fade-down' className=' uppercase text [26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>CSS</h2>
            <h2 data-aos='fade-up' className=' uppercase text [26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>Javascript</h2>
            <h2 data-aos='fade-down' className=' uppercase text [26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>React</h2>
            <h2 data-aos='fade-down' className=' uppercase text [26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>Tailwind</h2>
        </div>
    </div>
  )
}

export default Habilidades