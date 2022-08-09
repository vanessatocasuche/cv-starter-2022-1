import React from 'react';
import * as AiIcons from 'react-icons/ai';

const Idiomas = () => (
  <main className="mt-8 mr-8 mb-8 ml-8">
    <h2 className="text-2xl text-center text-dark-violet font-bold mb-10">Idiomas</h2>
    <div className='flex flex-wrap  justify-center mt-10 '>
      <div className='flex flex-col mx-10 my-5 text-gray-800  w-48  text-sm px-4 p-6 text-center hover:bg-gray-300/80 bg-gray-200 rounded-lg '>
        <span className='font-semibold '>Español Nativo</span>
        <br/>
        <span>Native Spanish</span>
        <span>Spanien gebürtig</span>
        <span>Espanhol nativo</span>
        <span>Nativo spagna</span>
        <span>西班牙人</span>
        <img src={<AiIcons.AiOutlineCheckCircle/>} alt='icon' className='m-2 mt-4 mb-2'/>
      </div>
      <div className='flex flex-col mx-10 my-5  text-gray-800 w-48  text-sm px-4 p-6 text-center hover:bg-gray-300/80 bg-gray-200 rounded-lg '>
        <span className='font-semibold '>Inglés Básico</span>
        <br/>
        <span >Basic English</span>
        <span >Englisch Basic</span>
        <span >Inglês básico</span>
        <span >Inglese di base</span>
        <span >成语英语基础</span>
        <img src={<AiIcons.AiOutlineCheckCircle/>} alt='icon' className='m-2 mt-4 mb-2'/>
      </div>
    </div>

  </main>
);

export default Idiomas;