import React, { useState } from 'react';

const Sidebar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(true);
  const Menus = [
    { title: 'Información General', src: 'user-solid', href: '/informacionbasica' },
    { title: 'Información Académica', src: 'user-graduate', href: '/informacionacademica' },
    { title: 'Información Laboral', src: 'user-gear-solid', href: '/informacionlaboral' },
    { title: 'Conocimientoseintereses', src: 'person-rays-solid', href: '/conocimientoseintereses' },
    { title: 'Idiomas', src: 'language-solid', href: '/idiomas' },
    { title: 'Cursos y certificaciones', src: 'user-graduate-solid', href: '/cursosycertificaciones' },
    { title: 'Hobbies', src: 'person-skiing-nordic-solid', href: '/hobbies' }
  ];
  return (
    <div className='flex'>
      <div
        className={` ${
          mostrarMenu ? 'w-72' : 'w-20'
        } bg-light-yellow h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src='/icons/right-from-bracket-solid.svg'
          alt='Icon'
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!mostrarMenu && 'rotate-180'}`}
          onClick={() => setMostrarMenu(!mostrarMenu)}
        />
        <ul className='pt-6'>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <img alt='Logo' src={`/icons/${Menu.src}.svg`} />
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
        <h1 className='text-2xl font-semibold'>Aquí va la página deseada</h1>
        <div >
        </div> 
      </div>
    </div>
  );
};


export default Sidebar;
