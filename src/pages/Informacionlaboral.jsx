import React from 'react';

const Informacionlaboral = () => (
  <main className='mt-8 mr-8 mb-8 ml-8'>
    <h2 className='text-2xl text-center text-dark-violet font-bold mb-10'>Información Laboral</h2>
    <div className='flex flex-wrap text-gray-800 justify-center'>
      <div className='flex flex-col w-96 text-sm px-4 pb-6' >
        <div className='mb-1 bg-gray-200 rounded-t-lg py-2 px-2 text-center font-bold a '>
          <span>Auxiliar de Programación</span>
        </div>
        <div className='mb-1 bg-gray-200 py-2 px-3 '>
          <span>Universidad de Antioquia</span>
        </div>
        <div className='mb-1 h-auto bg-gray-200 py-4 px-3 '>
          <span>Funciones:</span>
          <ul className='list-disc ml-5'>
            <li>Mantenimiento de aplicaciones.</li>
            <li>Modelado de Base de datos relacional para aplicación según requerimientos</li>
            <li>Maquetación (wireframe y vistas profesionales) en Figma según diagramas de flujo</li>
            <li>Desarrollo front-end de aplicación en Bootstrap, en React.js con tailwindCSS.</li>
            <li>Citar y hacer parte de Reuniones SCRUM con el equipo de trabajo.</li>
            <li>Presentación semanal y mensual de informes estadisticos enDataStudio de la universidad.</li>
            <li>Agregar funionalidades a sitios Web con Wordpress</li>
            <span className='font-bold'><br/>Mayor logro: </span>
            <li>Hacer parte de un proyecto de desarrollo desde la primera parte de levantar historias de usuario hasta su desarrollo</li>
          </ul>
        </div>
        <div className=' bg-gray-200 py-1 px-4 rounded-b-lg text-gray-800/30'>
          <span >Agosto 2021 - Presente <br/>(6 meses)</span>
        </div>
      </div>
      <div className='flex flex-col w-80 text-sm px-4 pb-6' >
        <div className='mb-1 bg-gray-200 rounded-t-lg py-2 px-2 text-center font-bold a '>
          <span>Apoyo al área de Ingeniería de Red.</span>
        </div>
        <div className='mb-1 bg-gray-200 py-2 px-3 '>
          <span>Tigo Une</span>
        </div>
        <div className='mb-1 h-auto bg-gray-200 py-4 px-3 '>
          <span>Funciones:</span>
          <ul className='list-disc ml-5'>
            <li>Diseño y actualización de bases de datos de equipos de redes que se encontraban en un proyecto de migración o actualización</li>
            <li>Programar solicitudes necesarias para hacer la migración de las líneas en los equipos de red</li>
          </ul>
        </div>
        <div className=' bg-gray-200 py-1 px-4 rounded-b-lg text-gray-800/30'>
          <span >Julio 2016 - Diciembre 2016 <br/>(6 meses)</span>
        </div>
      </div>
    </div>
  </main>


);

export default Informacionlaboral;
