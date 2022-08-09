import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';

const Hobbies = () => (
  <main className="mt-8 mr-8 mb-8 ml-8">
    <h2 className="text-2xl text-center text-dark-violet font-bold mb-10">Hobbies</h2>
    <div className='flex flex-wrap justify-center mt-10 '>
      <div className='flex flex-col mx-5 my-5 text-gray-800 w-72  text-sm px-4 p-6 text-center hover:bg-gray-300/80 bg-gray-200 rounded-lg '>
        <span className='font-semibold '>Triatlon</span>
        <div className='flex flex-row flex-grow mx-2'>
          <img src={<FaIcons.FaRunning/>} alt='icon' className='m-2 w-24'/>
          <img src={<FaIcons.FaBiking/>} alt='icon' className='m-2 w-24'/>
          <img src={<FaIcons.FaSwimmer/>} alt='icon' className='m-2 w-24'/>
        </div>
      </div>
      <div className='flex flex-col mx-5 my-5 text-gray-800 w-72  text-sm px-4 p-6 text-center hover:bg-gray-300/80 bg-gray-200 rounded-lg '>
        <span className='font-semibold '>Leer</span>
        <div className='flex flex-row mx-2'>
          <img src={<GiIcons.GiSpellBook/>} alt='icon' className='m-2 w-24'/>
          <img src={<GiIcons.GiCoffeeCup/>} alt='icon' className='m-2 w-24'/>
          <img src={<GoIcons.GoFileCode/>} alt='icon' className='m-2 w-24'/>
        </div>
      </div>
      <div className='flex flex-col mx-5 my-5 text-gray-800 w-72  text-sm px-4 p-6 text-center hover:bg-gray-300/80 bg-gray-200 rounded-lg '>
        <span className='font-semibold '>Actividades en el campo</span>
        <div className='flex flex-row mx-2'>
          <img src={<GiIcons.GiHiking/>} alt='icon' className='m-2 w-24'/>
          <img src={<GiIcons.GiMountains/>} alt='icon' className='m-2 w-24'/>
          <img src={<GiIcons.GiCampingTent/>} alt='icon' className='m-2 w-24'/>
        </div>
      </div>
    </div>
  </main>
);

export default Hobbies;
