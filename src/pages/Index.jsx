import React from 'react';
import * as BsIcons from 'react-icons/bs' 
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'

const Index = () => {
  return (
    <div className='mt-8 mr-8 mb-8 ml-8'>
        <div className='flex flex-col'>
        <span className='text-4xl font-semibold text-dark-violet text-center mb-10'>Vanessa Tocasuche Ochoa</span>
        <span className='text-lg font-light text-gray-300'>Desarrolladora Junior de Back-end</span>
      </div>
      <div className='flex flex-col text-gray-700 rounded-lg bg-gray-100 p-10 w-full mt-3'>
        <span className='text-2xl font-semibold text-center mb-7'>Perfil</span>
        <span className='text-lg font-light '>
          <p>
            Auxiliar en Desarrollo de aplicaciones en la Universidad de Antioquia, actualmente estudiante de octavo semestre en Ingeniería de Sistemas con experiencia laboral de 12 meses en el desarrollo y mantenimiento de aplicaciones para la Integración continua y aplicación correcta de patrones de diseño.
          </p>
          <p>
            Soy una persona proactiva y con muy buena comunicación por lo cual disfruto mucho el trabajo en equipo donde suelo ser lider. Me considero muy disciplinada, responsable y a menudo me gusta consultar temas de Arquitectura de software. Busco una nueva oportunidad para aportar lo que he aprendido y continuar creciendo.
          </p>
        </span>
      </div>

      <div className='flex flex-wrap justify-center mt-10'>
        <a href='mailto:vanetocasuche@gmail.com' target='_blank' className='mx-9 mb-5'>
          <div className='flex-col overflow-hidden  text-gray-800 text-center rounded-lg bg-green-600/20 p-3 shadow-md w-full hover:bg-green-600/40 transition-all duration-50'>
            <span className='font-light mb-7'>Correo</span>
            <img src={<MdIcons.MdAlternateEmail/>} alt='icon' className='mt-4 mb-2'/>
            <span className='font-semibold text-lime-700'>vanetocasuche@gmail.com</span>
          </div>
        </a>
        <a href='https://www.linkedin.com/in/vanessatocasuche/' target='_blank'className='mx-9 mb-5'>
          <div className='flex-col overflow-hidden  text-gray-800 text-center rounded-lg bg-green-600/20 p-3 shadow-md w-full hover:bg-green-600/40 transition-all duration-50'>
            <span className='font-light mb-7'>LinkedIN</span>
            <img src={<FaIcons.FaLinkedinIn/>} alt='icon' className='mt-4 mb-2'/>
            <span className='font-semibold text-lime-700'>vanessatocasuche</span>
          </div>
        </a>
        <a href='https://github.com/vanessatocasuche' target='_blank' className='mx-9 mb-5'>
          <div className='flex-col overflow-hidden   text-gray-800 text-center rounded-lg bg-green-600/20 p-3 shadow-md w-full hover:bg-green-600/40 transition-all duration-50'>
            <span className='font-light mb-7'>GitHub</span>
            <img src={<BsIcons.BsGithub/>} alt='icon' className='mt-4 mb-2'/>
            <span className='font-semibold text-lime-700'>vanessatocasuche</span>
          </div>
        </a>
      </div>
    </div>
  );  
};

export default Index;
