import React from 'react';

const Conocimientoseintereses = () => (
  <main className='mt-8 mr-8 mb-8 ml-8'>
    <h2 className='text-2xl text-center text-dark-violet font-bold mb-10'>
      Conocimientos e Intereses
    </h2>
    <div className='flex flex-col text-gray-700 rounded-lg bg-gray-100 p-10 w-full mt-3'>
      <span className='text-2xl font-semibold text-center mb-7'>
        Conocimientos
      </span>
      <span className='text-lg font-light '>
        <ul className='list-disc ml-5'>
          <li>Arquitectura limpia y hexagonal.</li>
          <li>API REST en Angular con Base de datos SQL utilizando Docker</li>
          <li>
            Herramienta Travis para compilar y hacer pruebas de aplicaciones en
            tiempo real.
          </li>
          <li>Testeo de aplicaciones a través de Sonarcloud</li>
          <li>
            Aplicaciones en Angular, SpringBoot, React.js con TailwindCSS y
            Bootstrap
          </li>
          <li>
            Diseño desde cero de Bases de Datos con modelo EntidadRelación.
          </li>
          <li>Bases de datos SQL, MYSQL con docker</li>
          <li>
            Conocimientos en patrones de diseño como SOLID, GRASP y GoF, y en
            anti patrones de diseño.
          </li>
          <li>
            POO, en lenguaje Java (lib. javaFX) y C++, con patrones de diseño
            DAO.
          </li>
          <li>Almacenamiento en Git, flujo con GitFlow.</li>
          <li>Configuración y mantenimiento se servidor Apache.</li>
          <li>Instalación y configuración de Firewall</li>
          <li>
            Planeación y seguimiento de proyectos mediante la metodología SCRUM.
          </li>
        </ul>
      </span>
      <span className='text-2xl font-semibold text-center mb-7'>
        <br />
        Intereses
      </span>
      <span className='text-lg font-light '>
        Me encanta el aprendizaje continuo, es por ello que elegí ser Ingeniera
        de Sistemas en lo que me interesa el desarrollo de aplicaciones desde el
        lado de Back-end porque me supone a diario nuevos retos, desde el lado
        de front-end soy muy buena porque soy muy pulida en las entregas. El
        trabajo en equipo es mi fuerte ya que soy proactiva, me gusta compartir,
        enseñar y aprender de los demás.
      </span>
    </div>
  </main>
);

export default Conocimientoseintereses;
