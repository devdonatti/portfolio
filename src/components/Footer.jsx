import React from 'react'
import { FaGithub, FaLinkedin, FaVoicemail, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer className='bg-slate-800 text-white lg:px-48 px-4'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
            <span className='text-3xl font-semibold text-fuchsia-800 py-2 uppercase'>Logo</span>
            <p className='text-[16px] my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus distinctio quas. Vero illum asperiores distinctio vitae nemo adipisci ut, fugiat maxime possimus reiciendis, quidem perspiciatis odit beatae sed non.</p>
        </div>
        <div>
            <h2 className='text [22px] font-semibold text-fuchsia-800 py-2 uppercase'>Servicios</h2>
            <ul>
                <li className='my-2'>Web developement</li>
                <li className='my-2'>Web Desing</li>
                <li className='my-2'>E-commerce</li>
                <li className='my-2'>SEO</li>
            </ul>
        </div>
        <div className='mb-4 md:mb-0'>
            <h2 className='text [22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contacto</h2>
            <p className='text-[16px] my-4'>Email: mdonattiprogramacion@gmail.com </p>
            <p className='text-[16px] my-4'>Telefono: 116460-9581</p>
        </div>
        <div>
        <h2 className='text [22px] font-semibold text-fuchsia-800 py-2 uppercase'>Seguime</h2>
        <div className=' flex space-x-4 '>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
                <FaGithub/>
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
                <FaLinkedin/>
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'href="">
                <FaWhatsapp/>
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
                <FaVoicemail/>
            </a>
        </div>
      
        </div>
       
    </div>
   
           
   </footer>
  )
}

export default Footer