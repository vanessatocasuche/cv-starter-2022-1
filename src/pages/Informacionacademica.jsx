import React from 'react';

const Informacionacademica = () => (
  <main className='mt-8 mr-8 mb-8 ml-8'>
    <h2 className='text-2xl text-center text-dark-violet font-bold mb-10'>
      Información Académica
    </h2>
    <div className='flex flex-wrap text-gray-800 justify-center'>
      <div className='flex flex-col w-80 text-sm px-4 pb-6'>
        <div className='mb-1 bg-gray-200 rounded-t-lg py-2 px-2 text-center font-bold a '>
          <span>Bachiller Técnica en Sistemas</span>
        </div>
        <div className='mb-1 bg-gray-200 py-2 px-3 '>
          <span>IE San antonio de Padua / SENA</span>
        </div>
        <div className='mb-1 h-72 bg-gray-200 py-4 px-3'>
          <span>Conocimientos:</span>
          <ul className='list-disc ml-5'>
            <li>Mantenimiento preventivo y correctivo de computadores.</li>
            <li>Direccionamiento en redes de Datos.</li>
            <li>Desarrollo de aplicaciones en pseudocodigo.</li>
          </ul>
        </div>
        <div className=' bg-gray-200 py-1 px-4 rounded-b-lg text-gray-800/30'>
          <span>Técnica</span>
        </div>
      </div>

      <div className='flex flex-col w-80 text-sm px-4 pb-6'>
        <div className='mb-1 bg-gray-200 rounded-t-lg py-2 px-2 text-center font-bold  '>
          <span>Tecnologa en Gestión de Redes de Datos</span>
        </div>
        <div className='mb-1 bg-gray-200 py-2 px-3 '>
          <span>Servicio Nacional de Aprendizaje - SENA </span>
        </div>
        <div className='mb-1 h-72 bg-gray-200 py-4 px-3 '>
          <span>Conocimientos:</span>
          <ul className='list-disc ml-5'>
            <li>
              Administración e instalacion de diferentes servidores (Linux y
              Windows Server)y clientes: SSH, FTP, SMTP, DHCP, DNS, SNMTP.
            </li>
            <li>Administración de Redes de datos.</li>
            <li>Cableado estructurado.</li>
            <li>Seguridad como firewall.</li>
            <li>Administracion de switches y routers.</li>
          </ul>
        </div>
        <div className=' bg-gray-200 py-1 px-4 rounded-b-lg text-gray-800/30'>
          <span>Tecnología</span>
        </div>
      </div>

      <div className='flex flex-col w-80 text-sm px-4 pb-6'>
        <div className='mb-1 bg-gray-200 rounded-t-lg py-2 px-2 text-center font-bold'>
          <span>Estudiante de Ingeniería de Sistemas</span>
        </div>
        <div className='mb-1 bg-gray-200 py-2 px-3 '>
          <span>Universidad de Antioquia</span>
        </div>
        <div className='mb-1 h-72 bg-gray-200 py-4 px-3'>
          <span>Conocimientos:</span>
          <ul className='list-disc ml-5'>
            <li>Analisis y diseño de Sistemas 1 y 2.</li>
            <li>Patrones y Antipatrones de diseño.</li>
            <li>Historias de Usuario</li>
            <li>Bases de Datos</li>
            <li>Ciclo de vida de una Aplicación</li>
            <li>Arquitectura de Software.</li>
            <li>Inteligencia Artificial.</li>
            <li>Diseño de aplicaciones empresariales.</li>
            <li>Arquitectura de Software.</li>
          </ul>
          <br />
          <span>
            Más información:
            <a href='https://www.udea.edu.co/wps/portal/udea/web/inicio/unidades-academicas/ingenieria/estudiar-facultad/pregrados/ingenieria-sistemas#:~:text=Ingenier%C3%ADa%20de%20Sistemas%20tiene%20como,econ%C3%B3micos%2C%20culturales%20y%20de%20respeto'>
              www.udea.edu.co
            </a>
          </span>
        </div>
        <div className=' bg-gray-200 py-1 px-4 rounded-b-lg text-gray-800/30'>
          <span>Ingeniería</span>
        </div>
      </div>
    </div>
  </main>
);

export default Informacionacademica;
