import React, { useState } from 'react';

const Sidebar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(true);
  const Menus = [
    { title: 'Información General', src: 'Folder' },
    { title: 'Información Académica', src: 'Chat' },
    { title: 'Información Laboral', src: 'Folder' },
    { title: 'Portafolio de proyectos', src: 'Chat' },
    { title: 'Destrezas y hábilidades', src: 'Folder' },
    { title: 'Idiomas', src: 'Chat' },
    { title: 'Cursos y certificaciones', src: 'Chat' },
    { title: 'Hobbies', src: 'Chat' }
  ];
  return (
    <div className='flex'>
      <div
        className={` ${
          mostrarMenu ? 'w-72' : 'w-20'
        } bg-light-yellow h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src='/assets/control.png'
          alt='Icon'
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!mostrarMenu && 'rotate-180'}`}
          onClick={() => setMostrarMenu(!mostrarMenu)}
        />
        <ul className='pt-6'>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <img alt='Logo' src={`/assets/${Menu.src}.png`} />
              <span
                className={`${
                  !mostrarMenu && 'hidden'
                }origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-screen flex-1 p-7'>
        <h1 className='text-2xl font-semibold '>Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
